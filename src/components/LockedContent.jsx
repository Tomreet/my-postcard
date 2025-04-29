import React from 'react';

// components/LockedContent.jsx
const LockedContent = ({ unlockDay, currentDay, children }) => {
    return currentDay <= unlockDay ? (
      <div className="locked">
        <div className="lock-icon">🔒</div>
        <p>Доступно через {unlockDay - currentDay} дней</p>
      </div>
    ) : (
      children
    );
  };
export default LockedContent;

