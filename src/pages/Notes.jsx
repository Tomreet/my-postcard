import { useAuth } from '../components/AuthProvider';
import { notesContent } from '../data/content';
import LockedContent from '../components/LockedContent';

const Notes = () => {
  const { user } = useAuth();
  const currentDay = 250; // Рассчитывается на основе даты дембеля

  return (
    <div className="notes-container">
      <h2>Личные записки для {user}</h2>
      <div className="notes-lista">
        {notesContent.map((note) => (
          <div key={note.id} className="note-item">
            <LockedContent 
              unlockDay={note.unlockDay} 
              currentDay={currentDay}
            >
              <div className="note-content">
                <p>{note.text}</p>
                <div className="note-date">День {note.unlockDay}</div>
              </div>
            </LockedContent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;