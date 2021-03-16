import React from 'react';
import Navigation from '../components/Navigation';

const home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>L<span>aurent</span><br /> Daucé</h1>
          <h2>Intégrateur Web</h2>
          <div className="pdf">
            <a href="./media/CV_Laurent_dauce.pdf" target="_blank">Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;