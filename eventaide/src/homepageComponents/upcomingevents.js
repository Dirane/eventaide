import React from 'react';

const UpcomingEvents = () => {
  return (
    <>
      <style>{`
        .upcoming-section {
          background-color: #ffffff;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 30px; 
          border-radius: 38px; 
        }
        .upcoming-text {
          flex: 1;
          color: #333333;
        }
        .upcoming-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: grey;
          margin-bottom: 25px;
        }
        .upcoming-subtitle {
          font-size: 2rem;
          font-weight: bold;
          color: #313178;
          margin-top: 15px;
        }
        .upcoming-icons {
          display: flex;
          align-items: center;
          margin-top: 10px;
           margin-top: 50px;
        }
        .upcoming-arrow {
          width: 15px;
          height: 15px;
          border-top: 2px solid #313178;
          border-right: 2px solid #313178;
          transform: rotate(45deg);
          margin-right: 15px;
        }
        .upcoming-arrow-line {
          width: 30px;
          height: 2px;
          background-color: #313178;
          margin-right: 5px;
        }
        .upcoming-icon {
          width: 10px;
          height: 10px;
          background-color: #313178;
          border-radius: 50%;
          margin-right: 15px;
         
        }
        .upcoming-images {
          flex: 1;
          display: flex;
          gap: 0; /* Remove gap between images */
          justify-content: flex-end;
          position: relative;
        }
        /* Base styling for event images */
        .event-image {
          width: 100%;
          max-width: 300px;
          object-fit: cover;
          border-radius: 8px;
        }
        /* Left image: slanted so that the bottom-right edge is elevated */
        .event-image.slanted {
          clip-path: polygon(100 100, 100% 100, 100% 100%, 100 100%);
          z-index: 1;
        }
        /* Right image: slanted so that the bottom-left edge is elevated */
        .event-image.slanted-right {
          clip-path: polygon(0%, 0, 100% 0, 100% 100%, 0 10%);
          
          right: 0;
          z-index: 2;
        }
        /* Responsive: stack vertically on small screens */
        @media (max-width: 768px) {
          .upcoming-section {
            flex-direction: column;
            text-align: center;
          }
          .upcoming-images {
            justify-content: center;
            margin-top: 1rem;
          }
        }
      `}</style>
      <div className="upcoming-section md-sec">
        <div className="upcoming-text">
          <div className="upcoming-title">Upcoming Events</div>
          <div className="upcoming-subtitle">Code My City 2.0</div>
          <div className="upcoming-icons">
            <div className="upcoming-arrow-line"></div>
            <div className="upcoming-arrow"></div>
            <div className="upcoming-icon"></div>
            <div className="upcoming-icon"></div>
            <div className="upcoming-icon"></div>
          </div>
        </div>
        <div className="upcoming-images">
          <img src="/images/event1.png" alt="Event 1" className="event-image slanted" />
          <img src="/images/event2.png" alt="Event 2" className="event-image slanted-right" />
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;