import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const contact = () => {
  return (
    <div className="contact">
    <Navigation />
    <div className="contactContent">
      <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>St Georges de Reintembault</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0778393001">
                <span className="clickInput" onClick={() =>
                 { alert("Téléphone copié !");}}>07 78 39 30 01</span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="gwelaurentaz@gmail.com">
                <span className="clickInput" onClick={() =>
                 { alert("E-mail copié !");}}>gwelaurentaz@gmail.com</span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Tazlocoding" target="_blank" rel="noopener noreferrer">
              <h4>GitHub</h4>
              <i className="fab fa-github"></i>
            </a>
           
          </ul>
        </div>
      
    </div>
    </div>
  );
};

export default contact;