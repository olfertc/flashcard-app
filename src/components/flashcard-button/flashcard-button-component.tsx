import React from "react";
import "./flashcard-button.styles.scss";

class FlashCardButton extends React.Component {
  handleClick() {
    
  }

  render() {
    return (
      <button className="flashcards" onClick={() => this.handleClick()}>
        Flash Cards
      </button>
    );
  }
}

export default FlashCardButton;
