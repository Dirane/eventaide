import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleCreateEvent = () => {
    navigate('/create-event');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>EventAid</h2> {/* Updated to include the platform name */}
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active"><a href="#">Overview</a></li>
            <li>
              <a href="#">Events <span className="caret">▼</span></a>
              <ul className="dropdown">
                <li><a href="#" onClick={handleCreateEvent}>Create Event</a></li>
                <li><a href="#">Event Track</a></li>
              </ul>
            </li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Overview</h1>
          <div className="user-info">
            <p>Welcome, {user ? user.Name : 'Guest'}!</p>
            {user && <p>UserID: {user.UserID}</p>}
          </div>
        </header>
        <section className="overview">
          <div className="overview-card">
            <h3>Past Events</h3>
            <p>{events.length}</p>
            <ul className="event-list">
              {events.map(event => (
                <li key={event.event_id} className="event-card">
                  <h3 className="event-title">title: {event.title}</h3>
                  <p className="event-date">Date: {event.Date}</p>
                  <p className="event-description">Description: {event.Description}</p>
                  <p className="event-location">Location: {event.location}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="overview-card">
            <h3>Upcoming Events</h3>
            <p>4</p>
          </div>
          <div className="overview-card">
            <h3>All Events</h3>
            <p>4</p>
          </div>
          <div className="overview-card">
            <h3>Registered Users</h3>
            <p>19</p>
          </div>
        </section>
        <section className="additional-info">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button onClick={handleCreateEvent}>Create New Event</button>
            <button>View All Events</button>
            <button>Manage Users</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;