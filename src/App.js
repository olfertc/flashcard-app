import React from "react";
import "./App.css";
import Card from "./card/card.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {id: 1, japanese: "Japanese", english: "English"},
        {id: 2, japanese: "Japanese_2", english: "English_2"},
      ],
      currentCard: {}
    }
  }

componentDidMount() {
  const currentCards = this.state.cards;

  this.setState({
    cards: currentCards,
    currentCard: this.getRandomCard(currentCards)
  })
}

getRandomCard(currentCards) {
  var card = currentCards[Math.floor(Math.random() * currentCards.length)];
  return(card);
}

updateCard() {
  const currentCards = this.state.cards;
  this.setState({
    cards: currentCards,
    currentCard: this.getRandomCard(currentCards)
  })
}

  render() {
    return (
      <div className="App">
      <h1>Flash Cards - Learn Japanese</h1>
        <div className="cards">
        <Card front="Watashi" back="I"/>
        <Card front="Nihon" back="Japan"/>
        <Card front="Ki" back="Tree"/>
        </div>
      </div>
    );
  }
}

export default App;
