import React, { Component } from "react";
import "./Answer.css";


class Answer extends Component {
  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <p>Has this character appeared yet?</p>
      </main>
    );
  }
}

export default Answer;