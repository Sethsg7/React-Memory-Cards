// import React, { Component } from "react";
import * as React from "react";
import "./Card.css";

class Card extends React.Component {

  render() {
    return (
      <main id="main">
        <div id="boxCont1">
          <div id="boxCont2">
            <div className="box">
              <div
                className="cardItem"
                style={{ backgroundColor: "#" + this.props.value.color }}
                >
                {/* {console.log("hello", this.props.value.color)} */}
                <p id="cont">{this.props.value.content}</p>
                <p id="char">{this.props.value.hanzi}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="answer">
          <p className="appear">Has this character appeared yet?</p>
        </div>
      </main>
    );
  }
}

export default Card;

// render() {
//   return (
//     <main>
//       <div id="boxCont1">
//         <div id="boxCont2">
//           <div className="box">
//             <div
//               className="cardItem"
//               style={{ backgroundColor: "#" + this.props.value.color }}
//             >
//               <p id="cont">{this.props.value.content}</p>
//            <div id="charCarry2">
//             <div id="charCarry">
//               <p id="char">{this.props.value.hanzi}</p>
//             </div>
//             </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="answer">
//         <p>Has this character appeared yet?</p>
//       </div>
//     </main>
//   );
// }
// }
