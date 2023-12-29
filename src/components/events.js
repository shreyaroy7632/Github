import React from 'react';
import PropTypes from 'prop-types';
import './events.css';

const EventCard = (props) => {
  const { imageUrl, altText, heading, teaser, description, date, time, venue, registrationLink, material } = props;

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
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </p>
        <p>
          <strong>Material:</strong> {material}
        </p>
      </div>
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
