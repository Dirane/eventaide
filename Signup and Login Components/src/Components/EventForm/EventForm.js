import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './EventForm.css'; // Using the name EventForm.css

const EventForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    description: "",
    start_time: "",
    location: "",
    category: "",
    status: "Free", // Default value for status
    payment: "",
    organizer_id: user ? user.UserID : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      });
      if (response.ok) {
        alert("Event Created Successfully!");
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        alert("Failed to create event.");
      }
    } catch (error) {
      console.error("Error submitting event data:", error);
      alert("An error occurred while creating the event.");
    }
  };

  return (
    <div className="event-creation-container">
      <h2 className="form-title">Create an Event</h2>
      <form onSubmit={handleSubmit} className="event-creation-form">
        <label className="form-label">Event Title:</label>
        <input 
          type="text" 
          name="title" 
          value={eventData.title} 
          onChange={handleChange} 
          required 
          className="form-input" 
          placeholder="Enter event title" 
        />

        <label className="form-label">Event Date:</label>
        <input 
          type="date" 
          name="date" 
          value={eventData.date} 
          onChange={handleChange} 
          required 
          className="form-input" 
          placeholder="Select event date" 
        />

        <label className="form-label">Event Description:</label>
        <textarea 
          name="description" 
          value={eventData.description} 
          onChange={handleChange} 
          required 
          className="form-textarea" 
          placeholder="Enter event description" 
        />

        <label className="form-label">Start Time:</label>
        <input 
          type="time" 
          name="start_time" 
          value={eventData.start_time} 
          onChange={handleChange} 
          required 
          className="form-input" 
          placeholder="Select start time" 
        />

        <label className="form-label">Location:</label>
        <input 
          type="text" 
          name="location" 
          value={eventData.location} 
          onChange={handleChange} 
          required 
          className="form-input" 
          placeholder="Enter event location" 
        />

        <label className="form-label">Category:</label>
        <input 
          type="text" 
          name="category" 
          value={eventData.category} 
          onChange={handleChange} 
          required 
          className="form-input" 
          placeholder="Enter event category" 
        />

        <label className="form-label">Status:</label>
        <select 
          name="status" 
          value={eventData.status} 
          onChange={handleChange} 
          required 
          className="form-input" // Use the same class for styling
        >
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>

        <label className="form-label">Payment:</label>
        <input 
          type="text" 
          name="payment" 
          value={eventData.payment} 
          onChange={handleChange} 
          className="form-input" 
          placeholder="Enter payment details" 
        />

        <button type="submit" className="submit-button">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;