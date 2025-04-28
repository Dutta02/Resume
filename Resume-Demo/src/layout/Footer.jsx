import React from 'react';
import './Footer.css'; 
import { Container } from 'react-bootstrap';


function Footer() {
  return (
    <Container>
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>
      </div>
    </footer>
    </Container>
  )
}

export default Footer;
