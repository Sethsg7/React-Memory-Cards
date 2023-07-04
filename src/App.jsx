import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

class App extends Component {
  constructor(props) {
    super(props);

    //Localstorage creates an item that persists even if page is closed or refreshed.
    //Can be created/called/cleared.
    const hiScore = localStorage.getItem("best");

    //State just gets used for values that will effect/update the page,
    //especially due to user input.
    //The score, hiscore, and cards will all change frequently as the player uses them.
    this.state = {
      score: 0,
      highest: hiScore ? hiScore : 0,
      cards: [
        {
          content: "yī - 1",
          hanzi: "一",
          wasSeen: false,
          color: this.randomHEX(),
        },
        {
          content: "èr - 2",
          hanzi: "二",
          wasSeen: false,
          color: this.randomHEX(),
        },
        {
          content: "sān - 3",
          hanzi: "三",
          wasSeen: false,
          color: this.randomHEX(),
        },
        {
          content: "sì - 4",
          hanzi: "四",
          wasSeen: false,
          color: this.randomHEX(),
        },
        {
          content: "wǔ - 5",
          hanzi: "五",
          wasSeen: false,
          color: this.randomHEX(),
        },
        {
          content: "liù - 6",
          hanzi: "六",
          wasSeen: false,
          color: this.randomHEX(),
        },
        {
          content: "qī - 7",
          hanzi: "七",
          wasSeen: false,
          color: this.randomHEX(),
        },
        {
          content: "bā - 8",
          hanzi: "八",
          wasSeen: false,
          color: this.randomHEX(),
        },
        {
          content: "jiǔ - 9",
          hanzi: "九",
          wasSeen: false,
          color: this.randomHEX(),
        },
        {
          content: "shí - 10",
          hanzi: "十",
          wasSeen: false,
          color: this.randomHEX(),
        },
      ],
    };
    //Bind must be used to acces STATE/Props/Other members of the class.
    //These two take the card from the state area, so they need to be binded.
    //RandomHEX does not take from the state, even though it's used in state.
    //Bind is done right outside of the state.
    this.checkScore = this.checkScore.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  //16777215 is the maximum hexidecimal value for color. The .toString parses
  //it to be properly read as a color.

  randomHEX() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  winMessage() {
    const congratulations = document.getElementById("congrats");
    congratulations.classList.toggle("show-congrats");
    setTimeout(() => congratulations.classList.toggle("show-congrats"), 6000);
  }
  //() => is the same as function() {}.

  checkScore(item, choice) {
    let shuffled = this.shuffle(); //Checks if item was clicked vs user's choice.

    /*When checkScore is called, card inserted as item, true/false inserted as choice.*/
    if (item.wasSeen === choice) {
      let incrementScore = this.state.score + 1; //Correct choice.

      if (incrementScore === 10) {
        //User won, reset game and log hiscore.

        this.winMessage(); //Shows winmsg.

        //Make score 0, save hi, shuffle numbers.
        localStorage.setItem("best", incrementScore);
        this.setState({
          score: 0,
          highest: incrementScore,
          cards: shuffled,
        });
      } else {
        //Not at 10 points, proceed with the game.
        shuffled.forEach((num) => {
          if (num.content == item.content) {
            num.wasSeen = true;
          }
        });
        const newHiscore =
          this.state.highest > incrementScore
            ? this.state.highest
            : incrementScore;

        localStorage.setItem("best", newHiscore);

        this.setState({
          score: incrementScore,
          highest: newHiscore,
          cards: shuffled,
        });
      }

      //Made the wrong choice.
      //No false answer logic is necessary because of the if/else chain.
    } else {
      //Wrong choice, reset game.
      shuffled.forEach((item) => {
        //Reset each card to not seen.
        item.wasSeen = false;
      });
      this.setState({
        //Change state to score 0, set proper hiscore, shuffle cards.
        score: 0,
        highest:
          this.state.highest > this.state.score
            ? this.state.highest
            : this.state.score,
        cards: shuffled,
      });
    }
  }


  shuffle() {
    let array = this.state.cards;
    let index = this.state.cards.length,
      temporaryIndex,
      randomIndex;

    while (0 !== index) {
      randomIndex = Math.floor(Math.random() * index);
      index -= 1;

      temporaryIndex = array[index];
      array[index] = array[randomIndex];
      array[index].color = this.randomHEX();
      array[randomIndex] = temporaryIndex;
      array[randomIndex].color = this.randomHEX();
    }
    return array;
  }

  componentDidMount() {
    let array = this.shuffle();
    this.setState({ cards: array });
  }



  render() {
    const randomIndex = Math.floor(Math.random() * this.state.cards.length);
    const selectedCard = this.state.cards[randomIndex];

    return (
      <main className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <header className="App-Header">
            <h1>React: Memory Game</h1>
            <p>Answer the questions to test your memory.</p>

            <div id="congrats" className="show-congrats">
              <h3>Congratulations. You got the hiscore!</h3>
            </div>

            <div id="scoreBoardCont">
              <div className="App-scoreboard">
                <span id="S1">Score: {this.state.score}</span>
                <span id="S2">Best: {this.state.highest}</span>
              </div>
            </div>
          </header>
        </div>
        <section className="App-container">
          <div className="App-item-container">
            <Card value={selectedCard} />
          </div>

          <div id="btnsM">
            <div id="btns">
              <button
                id="b1"
                onClick={() => this.checkScore(selectedCard, true)}
              >
                Yes
              </button>
              <button
                id="b2"
                onClick={() => this.checkScore(selectedCard, false)}
              >
                No
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
