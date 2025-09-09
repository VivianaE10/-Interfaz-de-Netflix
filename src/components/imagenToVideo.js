// import React, { useState } from "react";

// const ImagenToVideo = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     setTimeout(() => {
//       if (isHovered) {
//         setShowVideo(true);
//       }
//     }, 2000);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setShowVideo(false);
//   };

//   return (
//     <div
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{ width: "100%", height: "auto" }}
//     >
//       {showVideo ? (
//         <video width="100%" height="auto" autoPlay loop muted>
//           <source src="video.mp4" type="video/mp4" />
//
//         </video>
//       ) : (
//         <img
//           src="https://shotdeck.com/assets/images/stills/thumb/small_8EM5ADI5.jpg"
//           width="100%"
//           height="auto"
//           alt="banner"
//         />
//       )}
//     </div>
//   );
// };

// export default ImagenToVideo;
