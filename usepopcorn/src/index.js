import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// function Text() {
//   const [movieRating, setMovieRating] = React.useState(0);
//   return (
//     <div>
//       {/* <StarRating
//         maxRating={10}
//         color="blue"
//         defaultRating={movieRating}
//         onSetRating={setMovieRating}
//       /> */}
//       <p>This movies was rating {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["Trribile", "  Bad", " Okay", "good", "Excellent"]}
    /> */}
    {/* <Text /> */}
  </React.StrictMode>,
);
