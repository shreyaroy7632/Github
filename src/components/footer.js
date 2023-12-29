// import React from 'react';
// import './footer.css';
// const Footer = () => {
//     return (
//         <>
        
//        <div className='foot'>
//        <div className='contact'> 
//         Contact Us
//         </div>
//         <div ></div>
//         <div className='logos'>
//        <img src = "instagram.png" className='instagram'/>
//         <img src = "youtube.png" className='logo'/>
//         <img src = "facebook.png" className='logo'/>
//         </div>
//        </div>
        
//         </>
//     );
// };
// export default Footer;
// Footer.js

import React from 'react';
import './footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="foot">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Youtube</p>
          <p>Instagram</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
