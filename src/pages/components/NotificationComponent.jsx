import React, { useEffect } from 'react';
import useNotification from './notification';
import { IoMdCheckmarkCircle } from "react-icons/io";

const NotificationComponent = () => {
  const { notification, removeNotification } = useNotification(); 

  useEffect(() => {
    
    if (notification.length > 0) {
      const timer = setInterval(() => {
        removeNotification(); 
      }, 4000); 

      return () => clearInterval(timer); 
    }
  }, [notification, removeNotification]);

  return (
    <div className='flex justify-center items-center w-full pt-5'>
      {notification.length > 0 && (
        <div className='fixed p-1 text-black h-[30px] bg-white rounded-sm z-[100]'>
          {notification.map((notif, index) => (
            <div key={index} className="mb-2">
              <h1 className='flex flex-row justify-center items-center'>{notif} <IoMdCheckmarkCircle className=' text-red-500'/></h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;
