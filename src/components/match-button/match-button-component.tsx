import React from "react";
import "./match-button.styles.scss";

class MatchButton extends React.Component {
  handleClick() {}

  render() {
    return (
      <button className="matching" onClick={() => this.handleClick()}>
        Matching
      </button>
    );
  }
}

export default MatchButton;
