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
    };
  }

  render() {
    const { kana_chars } = this.state;
    const getTenCards = kana_chars.filter(char => char.id < 11);
    console.log(getTenCards);
    
    const shuffled_kana_chars = [...kana_chars].sort(() => Math.random() - Math.random());
    const getTenRandomCards = shuffled_kana_chars.slice(0,10);
    console.log(getTenRandomCards);

    return (
      <div className="App">
        <h1> Let's Learn Japanese! </h1>
        <CardList kana_chars={kana_chars} />
      </div>
    );
  }
}

export default App;
