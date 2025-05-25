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
        <div className="days">
          <span className="days-dop-plus" style={{color:"#003B01"}}>{daysRemaining + 2} </span>
          <span className="days-dop" style={{color:"#005C02"}}>{daysRemaining + 1} </span>
            {daysRemaining} 
          <span className="days-dop" style={{color:"#9E0000"}}> {- 1 + daysRemaining}</span>
          <span className="days-dop-plus" style={{color:"#5C0000"}}> {- 2 + daysRemaining}</span>
        </div>
        <div className="label">дней</div>
      </div>
    );
  };

export default CountdownTimer;