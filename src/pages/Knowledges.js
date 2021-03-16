import React from 'react';
import Experience from '../components/Knowledges/Experience';
import Hobbies from '../components/Knowledges/Hobbies';
import Langages from '../components/Knowledges/Langages';
import OtherSkills from '../components/Knowledges/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
  return (
    <div className="knowledges">
    <Navigation />
    <div className="knowledgesContent">
      <Langages />
      <Experience />
      <OtherSkills />
      <Hobbies />
    </div>
      
    </div>
  );
};

export default Knowledges;