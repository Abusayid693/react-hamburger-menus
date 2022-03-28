import React from "../../node_modules/react";
import { GhostButton } from "../../src/GhostButton/GhostButton";

/**
 * @if_you_are_using_npm_package
 * import "react-animated-navbars/dist/react-animated-navbars.cjs.development.css";
 * import { GhostNavbar } from "react-animated-navbars";
 */


const App3 = () => {
  return (
    <div className="App">
      <GhostButton
        styles={{
          navigationCard: {
            backgroundColor: "pink"
          },
          navigationButton: {
            borderRadius: "10px",
            border: "2px solid pink",
            // In case you need static not fixed
            position: "static",
            width: "40px",
            height: "40px",
            backgroundColor: "pink",
            zIndex: 10
          },
          navigationIcon: {
            zIndex: 10
          },
          iconColor: "#fff"
        }}
      >
        <ul
          style={{
            fontFamily: 'font-family: "Lato", sans-serif',
            color: "#fff"
          }}
        >
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
          <button
            style={{
              width: "89px",
              margin: "5px auto",
              border: "none",
              backgroundColor: "#FF4A6F",
              color: "#fff"
            }}
          >
            Login
          </button>
          <button
            style={{
              width: "89px",
              margin: "5px auto",
              border: "none",
              backgroundColor: "#fff",
              color: "#FF4A6F"
            }}
          >
            Logout
          </button>
        </ul>
      </GhostButton>
    </div>
  );
};

export default App3;
