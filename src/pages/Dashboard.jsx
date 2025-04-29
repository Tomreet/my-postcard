import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { useAuth } from '../components/AuthProvider'

// pages/Dashboard.jsx
const Dashboard = () => {
    const { user } = useAuth();
    const dischargeDate = '2026-05-29'; // Ваша дата дембеля
  
    return (
      <div>
        <CountdownTimer dischargeDate={dischargeDate} />
        <section className="personal-message">
          <h3>Персональное сообщение для {user.username}</h3>
          {user.notes.map((note, index) => (
            <div key={index} className="note">
              {note}
            </div>
          ))}
        </section>
      </div>
    );
  };

export default Dashboard;