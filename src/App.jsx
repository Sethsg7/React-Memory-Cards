import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import Score from "./Score";
import Answer from "./Answer";

const cards =  
[
  <Card pronounciation="yī" character="一"></Card>,
  <Card pronounciation="èr" character="二"></Card>,
  <Card pronounciation="sān" character="三"></Card>,
  <Card pronounciation="sì" character="四"></Card>,
  <Card pronounciation="wǔ" character="五"></Card>,
  <Card pronounciation="liù" character="六"></Card>,
  <Card pronounciation="qī" character="七"></Card>,
  <Card pronounciation="bā" character="八"></Card>,
  <Card pronounciation="jiǔ" character="九"></Card>,
  <Card pronounciation="shí" character="十"></Card>,
];

class App extends Component {
  constructor(props) {
    super(props);

    const hiScore = localStorage.getItem("hiScore");
    
    this.state = {
      score: 0,
      record: hiScore ? hiScore : 0,
      activeCard: cards[Math.floor(Math.random() * cards.length)]
    }
  };

  getNewCard() {
    let activeCard = cards;
    activeCard.SetViewed(); //Viewed can be used with a boolean later.
    this.setState({activeCard: activeCard})
  }

render() {   //おＫ。
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
      {this.state.activeCard}
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