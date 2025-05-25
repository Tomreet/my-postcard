import React, { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { useAuth } from '../components/AuthProvider';

const Dashboard = () => {
  const { user } = useAuth();
  const dischargeDate = '2026-05-29';
  const [viewMode, setViewMode] = useState('list');

  return (
    <div>
      <CountdownTimer dischargeDate={dischargeDate} />
      <div className='box'>
        <div className="view-controls">
          <button
            onClick={() => setViewMode('list')}
            className={viewMode === 'list' ? 'active' : ''}
          >
            Сообщения
          </button>
          <button
            onClick={() => setViewMode('album')}
            className={viewMode === 'album' ? 'active' : ''}
          >
            Альбом
          </button>
        </div>

        <div className={`content-view ${viewMode}`}>
          <div className="user-card">
            <h3>{user.username}</h3>
            
            {viewMode === 'list' ? (
              <ul className="notes-list">
                {user.notes.map((note, index) => (
                  <li key={`note-${index}`}>{note}</li>
                ))}
              </ul>
            ) : (
              <div className="album-grid">
                {user.img.map((img, index) => (
                  <div key={`album-${index}`} className="note-card">
                    {<img src={img} alt="" />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;