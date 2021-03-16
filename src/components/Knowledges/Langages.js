import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Langages extends Component {
  state= {
    languages: [
      {id: 1, value: "CSS", xp:1.8},
      {id: 2, value: "Sass" , xp:1},
      {id: 3, value: "Javascript" , xp:1.5},
      {id: 4, value: "Php" , xp:1}
    ],
    frameworks: [
      {id: 1, value: "React", xp:1},
      {id: 2, value: "Bootstrap" , xp:0.5},
      {id: 3, value: "Sass" , xp:1},
      {id: 4, value: "AdobeXD" , xp:1.5}
    ]
  }
  render() {
    let {languages, frameworks} = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar 
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />

        <ProgressBar 
           languages={frameworks}
           className="frameworksDisplay"
           title="frameworks & bibliothéque"
        />
        
      </div>
    );
  }
}

export default Langages;
