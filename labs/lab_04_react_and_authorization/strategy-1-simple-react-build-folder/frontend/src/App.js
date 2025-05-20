import React, { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Identity from "./components/Identity";
import "./styles.css";

// NOTE: using function components to control state of app and NOT class components
// CSE 331 class uses class components, but functions work too
function App() {
  // KEY POINT HERE!!!
  // using useState to store user info and pass it to the Welcome component
  // (and other components if you add them later)
  const [user, setUser] = useState(null);

  return (
    <div className="container">
      <h1 className="title">Lab 9 User Authentication with React Frontend </h1>
      <Welcome user={user} />
      <Identity onUserFetched={setUser} />
      <div
        class="tenor-gif-embed"
        data-postid="23535143"
        data-share-method="host"
        data-aspect-ratio="1.16423"
        data-width="100%"
      >
        <a href="https://tenor.com/view/iu-cute-pretty-beautiful-model-gif-23535143">
          Iu Cute GIF
        </a>
        from <a href="https://tenor.com/search/iu-gifs">Iu GIFs</a>
      </div>{" "}
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script>
    </div>
  );
}

export default App;
