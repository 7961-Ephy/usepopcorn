// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import WatchedSummary from "./WatchedSummary";
// import WatchedMovieList from "./WatchedMovieList";

// function WatchedBox({ tempWatchedData, average }) {

//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (
//         <>
//           <WatchedSummary watched={watched} average={average} />

//           <WatchedMovieList watched={watched} />
//         </>
//       )}
//     </div>
//   );
// }

// export default WatchedBox;
