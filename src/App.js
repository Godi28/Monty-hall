// importing react package and custom CSS file for the program
import React from "react";
import "./new.css";

/* Game component that sets various states for the monty-hall game through respective
 functions and renders the game*/
class Game extends React.Component {
  // constructor that accepts props as an argument
  constructor(props) {
    // extending props from super component
    super(props);

    /// binding handleShuffle, handleChoice1, handleChoice2, handleCoice3 and Reset functions to 'this'
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleChoice1 = this.handleChoice1.bind(this);
    this.handleChoice2 = this.handleChoice2.bind(this);
    this.handleChoice3 = this.handleChoice3.bind(this);
    this.Reset = this.Reset.bind(this);

    // setting the initial states for all the props needed to an empty string
    this.state = {
      prize1: "",
      prize2: "",
      prize3: "",
      userChoice1: "",
      userChoice2: "",
      userChoice3: "",
      flip1: "",
      flip2: "",
      flip3: "",
    };
  }

  /* handleShuffle function that accepts an event as a parameter and sets the 2 losing pictures
 and a winning picture randomly for when doors are opened*/
  handleShuffle(e) {
    // array containing names of the winning and losing pictures
    const array = ["money.JPG", "cross.JPG", "cross.JPG"];
    // choosing the first picture by using a generated random index number for an array element
    let firstPick = array[Math.floor(Math.random() * array.length)];
    // getting the index of the chosen picture
    const index1 = array.indexOf(firstPick);
    // removing the picture from the array
    array.splice(index1, 1);
    /* repeating the process of choosing a picture by using a generated random index number for
     an array element for the changed array*/
    let secondPick = array[Math.floor(Math.random() * array.length)];
    // getting the index of the chosen picture
    const index2 = array.indexOf(secondPick);
    // removing the picture from the array
    array.splice(index2, 1);
    // chosing the remaining picture in the array
    let lastPick = array[0];
    // setting states to chosen pictures from the array
    this.setState({ prize1: firstPick, prize2: secondPick, prize3: lastPick });
  }

  /* handleChoice1 function that handles the users choice of door1 and the actions
   that happen when it is clicked */
  handleChoice1(e) {
    // referencing the winning or losing pictures behind the doors
    const prize2 = this.state.prize2;
    const prize3 = this.state.prize3;
    const prize1 = this.state.prize1;

    // referencing the users initial choice for the first door they click
    const userChoice1 = this.state.userChoice1;
    const userChoice2 = this.state.userChoice2;
    const userChoice3 = this.state.userChoice3;

    // condition for when the picture behind the second door is a losing option
    if (prize2 === "cross.JPG") {
      // setting states to select the first door and open the second door
      this.setState({ userChoice1: "selected", flip2: "flip-card-inner" });
    }
    // condition for when the picture behind the third door is a losing option
    else if (prize3 === "cross.JPG") {
      // setting states to select the first door and open the third door
      this.setState({ userChoice1: "selected", flip3: "flip-card-inner" });
    }
    // condition for when either of the 3 doors were previously selected
    if (
      userChoice2 === "selected" ||
      userChoice3 === "selected" ||
      userChoice1 === "selected"
    ) {
      //setting states to opening door1
      this.setState({ userChoice1: "", flip1: "flip-card-inner" });
      // condition for when its the winning door
      if (prize1 === "money.JPG") {
        // alert user of victory
        alert("You Win!!");
        //condition for losing door
      } else {
        // alert user of loss
        alert("Unlucky! Try Again.");
      }
    }
  }

  /* handleChoice2 function that handles the users choice of door2 and the actions
   that happen when it is clicked */
  handleChoice2(e) {
    // referencing the winning or losing pictures behind the doors
    const prize1 = this.state.prize1;
    const prize3 = this.state.prize3;
    const prize2 = this.state.prize2;

    // referencing the users initial choice for the first door they click
    const userChoice1 = this.state.userChoice1;
    const userChoice2 = this.state.userChoice2;
    const userChoice3 = this.state.userChoice3;

    // condition for when the picture behind the first door is a losing option
    if (prize1 === "cross.JPG") {
      // setting states to select the second door and open the first door
      this.setState({ userChoice2: "selected", flip1: "flip-card-inner" });
      // condition for when the picture behind the third door is a losing option
    } else if (prize3 === "cross.JPG") {
      // setting states to select the second door and open the third door
      this.setState({ userChoice2: "selected", flip3: "flip-card-inner" });
    }
    // condition for when either of the 3 doors were previously selected
    if (
      userChoice2 === "selected" ||
      userChoice3 === "selected" ||
      userChoice1 === "selected"
    ) {
      // setting states to opening door2
      this.setState({ userChoice2: "", flip2: "flip-card-inner" });
      // condition for when its the winning door
      if (prize2 === "money.JPG") {
        // alert user of victory
        alert("You Win!!");
        // calling function to reset a game and passing the event to it
      } else {
        // alert user of loss
        alert("Unlucky! Try Again.");
      }
    }
  }

  /* handleChoice2 function that handles the users choice of door2 and the actions
   that happen when it is clicked */
  handleChoice3(e) {
    // referencing the winning or losing pictures behind the doors
    const prize2 = this.state.prize2;
    const prize1 = this.state.prize1;
    const prize3 = this.state.prize3;

    // referencing the users initial choice for the first door they click
    const userChoice1 = this.state.userChoice1;
    const userChoice2 = this.state.userChoice2;
    const userChoice3 = this.state.userChoice3;

    // condition for when the picture behind the second door is a losing option
    if (prize2 === "cross.JPG") {
      // setting states to select the third door and open the second door
      this.setState({ userChoice3: "selected", flip2: "flip-card-inner" });
      // condition for when the picture behind the first door is a losing option
    } else if (prize1 === "cross.JPG") {
      // setting states to select the third door and open the first door
      this.setState({ userChoice3: "selected", flip1: "flip-card-inner" });
    }
    // condition for when either of the 3 doors were previously selected
    if (
      userChoice2 === "selected" ||
      userChoice3 === "selected" ||
      userChoice1 === "selected"
    ) {
      // setting states to opening door3
      this.setState({ userChoice3: "", flip3: "flip-card-inner" });
      // condition for when its the winning door
      if (prize3 === "money.JPG") {
        // alert user of victory
        alert("You Win!!");
        //condition for losing door
      } else {
        // alert user of loss
        alert("Unlucky! Try Again.");
      }
    }
  }

  // function to reset the game by reloading the page on button click
  Reset(e) {
    window.location.reload();
  }

  render() {
    // referencing props for the winning or losing pictures for rendering behind the doors
    let prize1 = this.state.prize1;
    let prize2 = this.state.prize2;
    let prize3 = this.state.prize3;

    // referencing props for users first clicked door for rendering
    const userChoice1 = this.state.userChoice1;
    const userChoice2 = this.state.userChoice2;
    const userChoice3 = this.state.userChoice3;

    // referencing props for opening the door for rendering
    const flip1 = this.state.flip1;
    const flip2 = this.state.flip2;
    const flip3 = this.state.flip3;

    // returning the html to be rendered for the game
    return (
      <>
        <div className="row" onLoad={this.handleShuffle}>
          <div id="prize1" class="flip-card">
            <div class={flip1}>
              <div class="flip-card-front">
                <a href="#" onClick={this.handleChoice1}>
                  <img
                    className={userChoice1}
                    src={require("./door.JPG")}
                    alt="door"
                  />
                </a>
                <div className="sel">{userChoice1}</div>
              </div>
              <div class="flip-card-back">
                <img
                  className="prize"
                  alt="prize"
                  src={require("./" + prize1)}
                />
              </div>
            </div>
          </div>
          <br />
          <div id="prize2" class="flip-card">
            <div class={flip2}>
              <div class="flip-card-front">
                <a href="#" onClick={this.handleChoice2}>
                  <img
                    className={userChoice2}
                    src={require("./door.JPG")}
                    alt="door"
                  />
                </a>
                <div className="sel">{userChoice2}</div>
              </div>
              <div class="flip-card-back">
                <img
                  className="prize"
                  alt="prize"
                  src={require("./" + prize2)}
                />
              </div>
            </div>
          </div>
          <br />
          <div id="prize3" class="flip-card">
            <div class={flip3}>
              <div class="flip-card-front">
                <a href="#" onClick={this.handleChoice3}>
                  <img
                    className={userChoice3}
                    src={require("./door.JPG")}
                    alt="door"
                  />
                </a>
                <div className="sel">{userChoice3}</div>
              </div>
              <div class="flip-card-back">
                <img
                  className="prize"
                  alt="prize"
                  src={require("./" + prize3)}
                />
              </div>
            </div>
          </div>
          <br />
        </div>
        <button className="btn-primary" onClick={this.Reset}>
          Reset
        </button>
      </>
    );
  }
}

export default Game;
