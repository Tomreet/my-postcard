import React, { useEffect, useState } from 'react';
import { calculateDaysRemaining } from '../utils/dateUtils';

const CountdownTimer = ({ dischargeDate }) => {
    const [daysRemaining, setDaysRemaining] = useState(
      calculateDaysRemaining(dischargeDate)
    );
  
    useEffect(() => {
      const timer = setInterval(() => {
        setDaysRemaining(calculateDaysRemaining(dischargeDate));
      }, 86400000); // Обновление каждый день
  
      return () => clearInterval(timer);
    }, [dischargeDate]);
  
    return (
      <div className="countdown">
        <h2>До дембеля осталось:</h2>
        <div className="days">{daysRemaining}</div>
        <div className="label">дней</div>
      </div>
    );
  };

export default CountdownTimer;