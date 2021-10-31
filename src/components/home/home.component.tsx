import React from "react";
import CardList from "../card-list/card-list.component";
import CHARACTERS, { Character } from "../../character.data";

const Home = () => {
  return (
    <div className="home-page">
      <h1> Let's Learn Japanese! </h1>
      <h2>Study</h2>
      <h3> click on a card to see the romaji translation </h3>
      <CardList characters={CHARACTERS} />
    </div>
  );
};

export default Home;
