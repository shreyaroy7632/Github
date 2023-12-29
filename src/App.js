import './App.css';
import EventCard from './components/events';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Section1 from './components/section1';

function App() {
  return (
    <div className='home'> 
      <Navbar/>
      <Home/>
      <Section1/>
      <div className='wrap'>
      <EventCard
        imageUrl="lectures.jpg"
        altText="Event"
        heading="SnT Winter Camp"
        teaser="Seminar"
        description="Join us for an informative winter camp seminar where we'll unveil details about the upcoming winter activities."
        date="January 15, 2023"
        time="6:00 PM - 9:00 PM"
        venue="L7"
        registrationLink="registration-link"
        material="To be uploaded"
      />
      <EventCard
        imageUrl="project.jpg"
        altText="Event"
        heading="Basics of ROS"
        teaser="Workshop"
        description="Join us for an informative winter camp seminar where we'll unveil details about the upcoming winter activities."
        date="January 15, 2023"
        time="6:00 PM - 9:00 PM"
        venue="L7"
        registrationLink="registration-link"
        material="To be uploaded"
      />
      <EventCard
        imageUrl="lectures.jpg"
        altText="event"
        heading="Introduction to CP"
        teaser="lecture"
        description="P-Club brings an introductory lecture for guiding first-year students, providing an introduction to kickstart their journeyof competitive coding."
        date="January 20, 2023"
        time="6:00 PM - 9:00 PM"
        venue="L18"
        registrationLink="registration-link"
        material="To be uploaded"
      />
      <EventCard
        imageUrl="project.jpg"
        altText="Event"
        heading="SnT Winter Camp"
        teaser="Seminar"
        description="Join us for an informative winter camp seminar where we'll unveil details about the upcoming winter activities."
        date="January 15, 2023"
        time="6:00 PM - 9:00 PM"
        venue="L7"
        registrationLink="registration-link"
        material="To be uploaded"
      />
      <EventCard
        imageUrl="lectures.jpg"
        altText="Event"
        heading="Basics of ROS"
        teaser="Workshop"
        description="Join us for an informative winter camp seminar where we'll unveil details about the upcoming winter activities."
        date="January 15, 2023"
        time="6:00 PM - 9:00 PM"
        venue="L7"
        registrationLink="registration-link"
        material="To be uploaded"
      />
      <EventCard
        imageUrl="project.jpg"
        altText="event"
        heading="Introduction to CP"
        teaser="lecture"
        description="P-Club brings an introductory lecture for guiding first-year students, providing an introduction to kickstart their journeyof competitive coding."
        date="January 20, 2023"
        time="6:00 PM - 9:00 PM"
        venue="L18"
        registrationLink="registration-link"
        material="To be uploaded"
      />
      </div>
       <Footer/>

    </div>
  );
}

export default App;
