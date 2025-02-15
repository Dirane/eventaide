import React, { useState } from "react";

import './EventForm.css';


const EventForm = () => {
  const [eventData, setEventData] = useState({
    eventtitle: "",
    date: "",
    description: "",
    time: "",
    location: "",
    nic: "",
    cost: "",
    
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
      
      <form onSubmit={handleSubmit} className="event-form" >


      <label>Event Title:</label>
      <input type="text" name="eventtitle" value={eventData.eventtitle} onChange={handleChange} required />

      <label>Event Date:</label>
        <input type="date" name="date" value={eventData.date} onChange={handleChange} required />

      <label>Event Description: </label>
        <textarea name="description" value={eventData.description} onChange={handleChange} required />

      <label>Start Time:</label>
        <input type="time" name="time" value={eventData.time} onChange={handleChange} required />

      <label>Location:</label>
        <input type="text" name="location" value={eventData.location} onChange={handleChange} required />


      <label>Organzer's NIC:</label>
        <input type="number" name="nic" value={eventData.nic} onChange={handleChange} required />


        <label for="type">Event Type: <select id="type" name="type">
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
            </select></label>
            

        <label>Cost:</label>
        <input type="text" name="cost" value={eventData.cost} onChange={handleChange}/>



        <p>cbjc dxfbvsvsncjsdcjsjajajgikjerfdijgierjfndjfnuerngejfg,zfvdfnhjhtekfm,vmnkrjgtjfndjnrejfngdsf ,sdnfv,mdfnvkjejhfnfvsmnfdjwrrfierjfkenfrehgfrnrg nergjehrgj nrkfjherjehrnkwer</p>

        
        

        

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
