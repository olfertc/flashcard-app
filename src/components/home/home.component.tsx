import React from "react";

import CHARACTERS, { Character } from "../../character.data";
import FlipCard from "../flip-card/flip-card.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-page">
      <h1> Let's Learn Japanese! </h1>
      <h2>Study</h2>
      <h3> click on a card to see the romaji translation </h3>

      <div className="card-list">
        {CHARACTERS.map((character: Character) => (
          <FlipCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Home;
