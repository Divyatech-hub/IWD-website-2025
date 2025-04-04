import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import "../../globalStyles.css";
import './attendee.css';

function Attendees() {
  const [imagePaths, setImagePaths] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // pause/play control

  useEffect(() => {
    const importImages = async () => {
      const totalImages = 20; // no. of logos 
      const importedImages = [];

      for (let i = 1; i <= totalImages; i++) {
        const image = await import(`../../assets/attendee_logo/image${i}.png`);
        importedImages.push(image.default); 
      }

      setImagePaths(importedImages);
    };

    importImages();
  }, []);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div 
      className="attendee-div" 
      id="attendee-section" 
      onTouchStart={handleTogglePause} 
      onTouchEnd={handleTogglePause}
    >
      <div className="section-title">Attendees</div>

      <Marquee 
        direction="left" 
        speed={350} 
        className="marquee-container" 
        pauseOnHover={!isHovered} 
        pauseOnClick={true} 
        pauseOnTouch={true} 
        pauseOnFocus={true} 
        pauseOnResize={true} 
        pauseOnScroll={true} 
        pause={isPaused} 
        onClick={handleTogglePause} 
      >
        {imagePaths.map((path, index) => (
          <div key={index} className="attendee-image-wrapper">
            <img src={path} alt={`Attendee ${index + 1}`} className="attendee-image h-[80px] sm:h-[100px]" />
          </div>
        ))}
      </Marquee>
      
    </div>
  );
}

export default Attendees;
