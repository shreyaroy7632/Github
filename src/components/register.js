import React, { useState } from 'react';
import './modal.css';

const RegistrationForm = ({ onClose }) => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    Name: '',
    Branch: '',
    email: '',
    roll_no: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For now, just show an alert
    alert('Your form was submitted!');
    
    // Close the dialog box
    onClose();
  };

  // Sample onClose function (replace with your actual logic)
  const handleClose = () => {
    console.log('Dialog box closed');
  };

  return (
    <div className="registration-form-container">
        <h3 style={{"marginLeft" : "90px"}}> Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <p className='label'>Name:</p>
          <input  className="input" type="text" name="Name" value={formData.Name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
        <p className='label'>IITK Email</p>
          <input  className="input" type="text" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
        <p className='label'>Branch:</p>
          <input  className="input" type="text" name="Branch" value={formData.Branch} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
        <p className='label'>Roll no.</p>
          <input className="input" type="text" name="roll_no" value={formData.roll_no} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
