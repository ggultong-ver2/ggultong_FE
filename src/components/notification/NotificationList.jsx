import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../lib/axios";
import axios from "axios";
import {
  // __getNotification,
  __readNotification,
  __deleteNotification,
  __deleteNotifications,
  __minusNotification,
} from "../../redux/modules/notificationSlice";
import "./style.css";
import styled from "styled-components";

function NotificationList({}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const IP = process.env.REACT_APP_URL;
  const [notificationData, setNotificationData] = useState([]);

  // 알림 전체 불러오기
  useEffect(() => {
    async function fetchData() {
      const { data } = await baseURL.get(`/notifications`, "", {
        headers: { Access_Token: `${localStorage.getItem("Access_Token")}` },
      });
      // console.log(data);
      setNotificationData(data);
    }
    fetchData();
  }, []);
  console.log("notificationData", notificationData);

  // 알림
  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await baseURL.delete(`/notifications/delete/${payload}`);
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);

  // const onclickReadNotification = (notificationId) => {
  //   readNotification(notificationId);
  //   dispatch(__readNotification(notificationId));

  //   const a = notifications?.data?.findIndex((v) => v.id === notificationId);
  //   if (!notifications?.data[a]?.status) {
  //     dispatch(__minusNotification(1));
  //   }
  // };

  // const onclickDeleteNotification = (notificationId) => {
  //   __deleteNotification(notificationId);
  //   dispatch(__deleteNotification(notificationId));

  //   const a = notifications?.data?.findIndex((v) => v.id === notificationId);
  //   if (!notifications?.data[a]?.status) {
  //     dispatch(__minusNotification(1));
  //   }
  // };

  // const onclickDeleteNotifications = () => {
  //   __deleteNotifications();
  //   dispatch(__deleteNotifications());
  //   dispatch(__minusNotification(NreadNotifications.data.count));
  // };

  // const readNotification = async (notificationId) => {
  //   await baseURL
  //     .get(`notification/read/${notificationId}`, null)
  //     .then((res) => {
  //       // console.log(res)
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  // };

  return (
    <div>
      <div>
        {notificationData.length === 0 ? (
          <div>
            <div>알림은 현재 준비 중입니다!🥺</div>
          </div>
        ) : (
          <>
            <div>
              <div>{`읽지 않은 알림 (${notificationData.length})`}</div>
              <div>
                {notificationData?.map((notification) => {
                  return (
                    <Card key={notification.id}>
                      {!notification.status ? ( // 읽지 않은 알람
                        <div
                          className="notification_list"
                          onClick={() => {
                            // onclickReadNotification(notification.id);
                            navigate();
                          }}
                        >
                          <div className="notification_content">
                            <span onClick={() => navigate()}>
                              {notification?.content}
                            </span>
                            {/* <button
                              onClick={(e) => {
                                e.stopPropagation();
                                // onclickDeleteNotification(notification.id);
                              }}
                            >
                              삭제
                            </button> */}
                          </div>
                        </div>
                      ) : (
                        // 읽은 알람
                        <div
                          onClick={() => {
                            navigate();
                          }}
                        >
                          <div>
                            <span>{notification.content.content}</span>
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                // onclickDeleteNotification(notification.id);
                              }}
                            >
                              삭제
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                // onclickDeleteNotifications();
              }}
            >
              <div>전체 삭제</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const Card = styled.div`
  margin-top: 10px;
`;

export default NotificationList;
