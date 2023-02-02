import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  __getNotification,
  __readNotification,
  __deleteNotification,
  __deleteNotifications,
} from "../../redux/modules/postSlice";
import "./style.css";

const navigate = useNavigate();
const dispatch = useDispatch();

const closeModal = () => {
  setShowNotification(false);
};

const onclickReadNotification = (notificationId) => {
  readNotification(notificationId);
  dispatch(__readNotification(notificationId));
};

return (
  <div onClick={closeModal}>
    <div>
      {notifications?.data.length === 0 ? (
        <div>
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
                    <div className="notificationn_list">
                      <div className="notification_content">
                        {/* <span>{notification.content.content}</span> */}
                        <div
                          onClick={() => {
                            onclickReadNotification;
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
                        {/* <span>{notification.content.content}</span> */}
                        <div>삭제</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      <div>
        <div>전체 삭제</div>
      </div>
    </div>
  </div>
);

export default NotificationList;
