import React from "react";
import "./speakers.css";
import SpeakerCard from "../speaker-cards/speaker-card";
import speakersData from "./speakers-list.js"

function Speakers() {

  return (
    <div className="speakers-div">
      {/* Speaker div content goes here */}I am Speakers
      <div className="speaker-cards-container">
        {speakersData.map((speaker, index) => (
          <SpeakerCard 
            key={index}
            imageurl={speaker.imageurl}
            name={speaker.name}
            position={speaker.position}
            company={speaker.company}
            description={speaker.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Speakers;
