import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
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
        <div id="boxCont1">
          <div id="boxCont2">
            <div class="box"></div>
          </div>
        </div>
      </main>
    );
  }
}

export default Card;
