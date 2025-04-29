import { useAuth } from '../components/AuthProvider';
import { albumContent } from '../data/content';
import LockedContent from '../components/LockedContent';

const Album = () => {
  const { user } = useAuth();
  const currentDay = 250; // Рассчитывается на основе даты дембеля

  return (
    <div className="album-container">
      <h2>Личный альбом для {user}</h2>
      <div className="photo-grid">
        {albumContent.map((photo) => (
          <div key={photo.id} className="photo-item">
            <LockedContent 
              unlockDay={photo.unlockDay} 
              currentDay={currentDay}
            >
              <img src={photo.src} alt={photo.caption} />
              <p>{photo.caption}</p>
            </LockedContent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;