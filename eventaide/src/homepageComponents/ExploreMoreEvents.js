import React from 'react';

const ExploreMoreEvents = () => {
  const events = [
    { id: 1, image: '/images/event5.webp', name: 'Event One', description: 'Description for event one.' },
    { id: 2, image: '/images/event4.webp', name: 'Event Two', description: 'Description for event two.' },
    { id: 3, image: '/images/event3.webp', name: 'Event Three', description: 'Description for event three.' },
    { id: 4, image: '/images/event4.webp', name: 'Event Four', description: 'Description for event four.' },
    { id: 5, image: '/images/event7.png', name: 'Event Five', description: 'Description for event five.' },
    { id: 6, image: '/images/event6.jpg', name: 'Event Six', description: 'Description for event six.' },
  ];

  return (
    <>
      <style>{`
        .explore-section {
          padding: 2rem;
          text-align: center;
        }
        .explore-title {
          font-size: 2rem;
          font-weight: bold;
          color: #313178;
          margin-bottom: 2rem;
        }
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .event-card {
          background-color: #f0f0f5; 
          border-radius: 8px;
          text-align: left;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border 0.3s, box-shadow 0.3s;
        }
        .event-card:hover {
          border: 2px solid #313178;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .event-image {
          width: 100%;
          height: auto;
          margin: 0;
          object-fit: cover;
          border-radius: 0;
        }
        .event-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .event-name {
          font-size: 1.25rem;
          font-weight: bold;
          color: #313178;
          margin-bottom: 0.5rem;
        }
        .event-description {
          font-size: 1rem;
          color: #666666;
          margin-bottom: 1rem;
        }
        .register-button {
          background-color: #313178;
          color: #ffffff;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
          align-self: flex-start;
        }
        .register-button:hover {
          background-color: #5757a3;
        }
      `}</style>
      <div className="explore-section md-sec">
        <div className="explore-title">Explore More Events</div>
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.name} className="event-image" />
              <div className="event-content">
                <div className="event-name">{event.name}</div>
                <div className="event-description">{event.description}</div>
                <button className="register-button">Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreMoreEvents;