import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    this.state = {
      viewed: false
    }
  }

  SetViewed() {
    this.setState({ viewed: true });
  }

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
            <div style={{
              backgroundColor: this.color
            }}
              className="box">
              <span>{this.props.pronounciation} - {this.props.character}</span></div>
          </div>
        </div>
      </main>
    );
  }
}

export default Card;