import React, { Component } from "react";
import "./Score.css";

class Score extends Component {
  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* <div id="scoreBoardCont"> */}
          <div id="scoreBoard">
            <span>Score: 0</span>
            <span>Best: 0</span>
          </div>
        {/* </div> */}
      </main>
    );
  }
}

export default Score;
