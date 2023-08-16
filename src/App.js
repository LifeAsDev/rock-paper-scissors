import "./App.css";

import React, { Component } from "react";
import Score from "./Score";
import Select from "./Select";
import GameResult from "./GameResult";
import rules from "./images/image-rules.svg";
import closeIcon from "./images/icon-close.svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      youPick: "",
      housePick: "",
      currentPickAnimation: 1,
      rules: false,
      playing: true,
      normalMode: false,
      score: 12,
      transformY: 0,
      winner: null,
    };
  }
  determineWinner = (youPick, housePick) => {
    if (youPick === housePick) {
      return "Draw";
    } else if (
      (youPick === "Rock" && housePick === "Scissors") ||
      (youPick === "Scissors" && housePick === "Paper") ||
      (youPick === "Paper" && housePick === "Rock")
    ) {
      return "You";
    } else {
      return "House";
    }
  };
  selectPick = (youPick) => {
    const housePick = ["Paper", "Rock", "Scissors"][
      Math.floor(Math.random() * 3)
    ];
    this.setState({ youPick, housePick, playing: false });
    this.startDuel();
  };
  startDuel = () => {
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        const shakeTime = 400;
        setTimeout(() => {
          this.setState({
            transformY: 30,
            currentPickAnimation: i + 1, // 1, 2, 3
          });

          setTimeout(() => {
            this.setState({
              transformY: 0,
            });
          }, shakeTime / 2);
          if (i === 2) {
            const winner = this.determineWinner(
              this.state.youPick,
              this.state.housePick
            );

            setTimeout(() => {
              this.setState({
                currentPickAnimation: -1,
                winner,
              });
            }, shakeTime);
          }
        }, shakeTime * i);
      }
    }, 250);
  };

  toggleRulesView = () => {
    this.setState((prevState) => ({
      rules: !prevState.rules,
    }));
  };
  retry = () => {
    this.setState({
      youPick: "",
      housePick: "",
      currentPickAnimation: 1,
      rules: false,
      playing: true,
      score: 12,
      transformY: 0,
      winner: null,
    });
  };
  render() {
    return (
      <div className="App">
        <div
          style={this.state.rules ? { display: "block" } : null}
          className="overlay"
        ></div>

        <Score score={this.state.score} />
        <div
          style={!this.state.rules ? { display: "none" } : null}
          className="rules-view"
        >
          <div className="rules-top">
            <span className="rules-tittle">RULES</span>
            <img
              onClick={this.toggleRulesView}
              className="close-icon"
              src={closeIcon}
              alt="Close Icon"
            />
          </div>
          <img className="rules-image" src={rules} alt="Rules" />
        </div>
        <div className="game-board">
          {this.state.playing ? (
            <Select selectPick={this.selectPick} />
          ) : (
            <GameResult
              retry={this.retry}
              youPick={this.state.youPick}
              housePick={this.state.housePick}
              transformY={this.state.transformY}
              currentPickAnimation={this.state.currentPickAnimation}
              winner={this.state.winner}
            />
          )}
        </div>
        <div onClick={this.toggleRulesView} className="rules-button">
          RULES
        </div>
      </div>
    );
  }
}

export default App;
