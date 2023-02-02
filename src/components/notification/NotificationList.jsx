import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../lib/axios";
import {
  __getNotification,
  __readNotification,
  __deleteNotification,
  __deleteNotifications,
  __minusNotification,
} from "../../redux/modules/postSlice";
import "./style.css";

function NotificationList({
  setShowNotification,
  notifications,
  NreadNotifications,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const closeModal = () => {
  //   setShowNotification(false);
  // };

  const onclickReadNotification = (notificationId) => {
    readNotification(notificationId);
    dispatch(__readNotification(notificationId));

    const a = notifications?.data?.findIndex((v) => v.id === notificationId);
    if (!notifications?.data[a]?.status) {
      dispatch(__minusNotification(1));
    }
  };

  const onclickDeleteNotification = (notificationId) => {
    __deleteNotification(notificationId);
    dispatch(__deleteNotification(notificationId));

    const a = notifications?.data?.findIndex((v) => v.id === notificationId);
    if (!notifications?.data[a]?.status) {
      dispatch(__minusNotification(1));
    }
  };

  const onclickDeleteNotifications = () => {
    __deleteNotifications();
    dispatch(__deleteNotifications());
    dispatch(__minusNotification(NreadNotifications.data.count));
  };

  const readNotification = async (notificationId) => {
    await baseURL.get(`notification/read/${notificationId}`, null)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        // console.log(err);
      });

    return (
      // <div onClick={closeModal}>
      <div>
        <div onClick={(e) => e.stopPropagation()}>
          {notifications?.data.length === 0 ? (
            <div className="alarm_menu">
              <div>알람이 없습니다</div>
            </div>
          ) : (
            <>
              <div>읽지 않은 알림 ({notifications?.data.length})</div>
              <div>
                {notifications?.data.map((notification) => {
                  return (
                    <div key={notification.id}>
                      {!notification.status ? ( // 읽지 않은 알람
                        <div
                          className="notification_list"
                          onClick={() => {
                            onclickReadNotification(notification.id);
                            navigate();
                          }}
                        >
                          <div className="notification_content">
                            <span>{notification.content.content}</span>
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                onclickDeleteNotification(notification.id);
                              }}
                            >
                              삭제
                            </div>
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
                                onclickDeleteNotification(notification.id);
                              }}
                            >
                              삭제
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <div
            onClick={(e) => {
              e.stopPropagation();
              onclickDeleteNotifications();
            }}
          >
            <div>전체 삭제</div>
          </div>
        </div>
      </div>
    );
  };
}

export default NotificationList;
