// SplashScreen.tsx
import React, { useState } from 'react';
import './SplashScreen.css'; // Add some styles for full screen video

const SplashScreen: React.FC = () => {
  // State to handle if the video is visible
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle playing the video
  const handlePlayVideo = () => setIsPlaying(true);
  const handleCloseVideo = () => setIsPlaying(false);

  return (
    <>
      {!isPlaying && (
        <div className="splash-screen">
          <button onClick={handlePlayVideo}>Play intro</button>
          <button  className="close-button" onClick={handleCloseVideo}>Close</button>
        </div>
        
      )}

      {isPlaying && (
             <div className="video-modal">
             <button className="close-button" onClick={handleCloseVideo}>X</button>
             {/* Reference the video file using a relative path */}
             <video
               src="/src/assets/splash.mp4"
               autoPlay
               onEnded={handleCloseVideo}
               controls={false} // Hide native controls for a cleaner look
             />
           </div>
      )}
    </>
  );
};

export default SplashScreen;
