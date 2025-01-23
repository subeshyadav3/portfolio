import React, { createContext, useState, useContext } from 'react';
import NotificationComponent from './NotificationComponent';

const notificationContext = createContext();

const useNotification = () => {
  return useContext(notificationContext);
};

export default useNotification;

export const NotificationProvider = ({ children }) => {
  const [notification, setNotifications] = useState([]);

  const addNotification = (message) => {
   
    setNotifications((prevNotifications) => [...prevNotifications, message]);
    
  };

  const removeNotification = () => {
    setNotifications((prevNotifications) => prevNotifications.slice(0, -1));
  };

  return (
    <notificationContext.Provider value={{ notification, addNotification, removeNotification }}>
      {children}
    </notificationContext.Provider>
  );
};



