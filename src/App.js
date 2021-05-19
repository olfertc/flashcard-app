import React from "react";
import "./App.css";
import CardList from "./card-list/card-list.component";
// import MatchButton from './match-button/match-button-component';
// import FlashCardButton from './flashcard-button/flashcard-button-component';
import KANA_DATA from "./kana.data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kana_chars: KANA_DATA,
      //category: ["Kana", "Hiragana", "Katakana"],
    };
  }

  render() {
    const { kana_chars } = this.state;
    //const { category } = this.state;

    return (
      <div className="App">
        <h1> Let's Learn Japanese! </h1>
        <CardList kana_chars={kana_chars} />
      </div>
    );
  }
}

export default App;
