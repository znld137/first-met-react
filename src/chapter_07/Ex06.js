import { useState, useEffect } from 'react';

function useUserStatus(userId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ServerAPI.subscribeUserStatus(userId, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
    };
  });

  return isOnline;
}
