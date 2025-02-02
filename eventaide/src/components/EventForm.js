import React, { useState } from "react";

import './EventForm.css';


const EventForm = () => {
  const [eventData, setEventData] = useState({
    organisername: "",
    eventtitle: "",
    eventtype: "",
    date: "",
    time: "",
    location: "",
    cost: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", eventData);
    alert("Event Created Successfully!");
  };

  return (
    <div className="event-form-container">
      <h2>Create an Event</h2>
      <form onSubmit={handleSubmit} className="event-form">

      <label>Organiser name:</label>
        <input type="text" name="organisername" value={eventData.organisername} onChange={handleChange} required />


        <label>Event title:</label>
        <input type="text" name="eventtitle" value={eventData.eventtitle} onChange={handleChange} required />

        <label>Event type:</label>
        <input type="text" name="eventtype" value={eventData.eventtype} onChange={handleChange} required />

        <label>Date:</label>
        <input type="date" name="date" value={eventData.date} onChange={handleChange} required />

        <label>Time:</label>
        <input type="time" name="time" value={eventData.time} onChange={handleChange} required />

        <label>Location:</label>
        <input type="text" name="location" value={eventData.location} onChange={handleChange} required />

        <label>Cost:</label>
        <input type="text" name="cost" value={eventData.cost} onChange={handleChange} required />


        <label>Description:</label>
        <textarea name="description" value={eventData.description} onChange={handleChange} required />

        

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
