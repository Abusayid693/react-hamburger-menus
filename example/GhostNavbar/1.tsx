import React from "../../node_modules/react";
import { GhostNavbar } from "../../src/GhostNavbar/GhostNavbar";

/**
 * @if_you_are_using_npm_package
 * import "react-animated-navbars/dist/react-animated-navbars.cjs.development.css";
 * import { GhostNavbar } from "react-animated-navbars";
 */

const App = () => {
  return (
    <div className="App">
      <GhostNavbar
        styles={{
          fontColor: "#fff",
          fontHoverColor: "#63EEDC",
          listHoverColor: ['', "#DFE4FC"],
          floatButtonX: 6,
          floatButtonY: 4,
          navigationButton: {
            borderRadius: "5px",
            width: "50px"
          },
          navigationBackground: {
            backgroundColor: "#63EEDC"
          }
        }}
      >
        <ul
          style={{
            fontFamily: 'font-family: "Lato", sans-serif'
          }}
        >
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar>
    </div>
  );
};

export default App;
