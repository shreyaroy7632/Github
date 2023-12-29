import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './events.css';
import RegistrationForm from './register';
import Modal from './modal';

const EventCard = (props) => {
  const { imageUrl, altText, heading, teaser, description, date, time, venue, registrationLink, material } = props;

  // State to manage the visibility of the registration form
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  // Event handler to toggle the visibility of the registration form
  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  // Function to handle the closing of the registration form
  const handleCloseRegistrationForm = () => {
    setShowRegistrationForm(false);
  };

  return (
    <div className="event-card">
      <img src={imageUrl} alt={altText} className="event-image" />

      <h2 className="event-heading">{heading}</h2>
      <h4 className="event-teaser">{teaser}</h4>
      <p className="event-description">{description}</p>

      <hr className="event-divider" />

      <div className="event-info">
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Venue:</strong> {venue}
        </p>
        <p>
          <strong>Registration:</strong>{' '}
          <button className='register' onClick={toggleRegistrationForm}>
            Register Now
          </button>
        </p>
        <p>
          <strong>Material:</strong> {material}
        </p>
      </div>

      {showRegistrationForm && (
        <Modal onClose={handleCloseRegistrationForm}>
          <RegistrationForm onClose={handleCloseRegistrationForm} />
        </Modal>
      )}
    </div>
  );
};

EventCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  teaser: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  registrationLink: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
};

export default EventCard;
