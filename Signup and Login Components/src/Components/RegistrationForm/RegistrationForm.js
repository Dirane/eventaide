import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; // Create this CSS file for styling

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user', // Default role
    phoneNumber: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError(''); // Clear error message when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Registration successful');
        navigate('/login'); // Redirect to login page
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          {error.includes('Name') && <div className="error-message">{error}</div>}
        </div>
        <div className="input-box">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          {error.includes('Email') && <div className="error-message">{error}</div>}
        </div>
        <div className="input-box">
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="input-box">
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;