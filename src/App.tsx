import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/home/home.component";
import Matching from "./components/matching/matching.component";
import Quiz from "./components/quiz/quiz.component";
import Header from "./components/header/header.component";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/matching" component={Matching} />
        <Route exact path="/quiz" component={Quiz} />
      </Switch>
    </div>
  );
}

export default App;


/*
TO DO:
  - matching page: click on cards to match meaning, scoring?
  - quiz page: (user can choose amount?) random number of cards shown
and they must enter correct romaji, calculate score
 - categories: homepage - add a place for sorting cards into categories, add new words/categories...
  - firebase: users - keep score of practice/study time?, quiz and matching scores
*/