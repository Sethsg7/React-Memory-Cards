import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import Score from "./Score";
import Answer from "./Answer";


class App extends Component {
   constructor(props) {
    super(props);
  //JS Here

    const hiScore = localStorage.getItem("hiScore");

  this.state = {
    score: 0,
    record: hiScore ? hiScore : 0,
    cards: [
      {
      content: "yī - 一" ,
      viewed: false,
      color: this.randomHEX(),
    },
    {
      content: "èr - 二",
      viewed: false,
      color: this.randomHEX(),
    },
    {
      content: "sān - 三",
      viewed: false,
      color: this.randomHEX(),
    },
    {
      content: "sì - 四" ,
      viewed: false,
      color: this.randomHEX(),
    },
    {
      content: "wǔ - 五"  ,
      viewed: false,
      color: this.randomHEX(),
    },
    {
      content: "liù - 六" ,
      viewed: false,
      color: this.randomHEX(),
    },
    {
      content: "qī - 七" ,
      viewed: false,
      color: this.randomHEX(),
    },
    {
      content: "bā - 八" ,
      viewed: false,
      color: this.randomHEX(),
    },
    {
      content: "jiǔ - 九" ,
      viewed: false,
      color: this.randomHEX(),
    },
    {
      content: "shí - 十" ,
      viewed: false,
      color: this.randomHEX(),
    }
    ]
    }
  };

  

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
        <h1>React: Memory</h1>
        <p>Answer the questions to test your memory.</p>
        <Card></Card>
        <Score></Score>
        <Answer></Answer>
      </main>
    );
  }
}


export default App;

//Project Outline.
/* 
Need:
Memory Cards
Scoreboard
Current Score Counter
Best Score counter
Cards that show images and text.
Function to Display cards in a random order when clicked.

Organization for Class Components:
Main Title/Info
Score 
Card
Yes/No button





*/