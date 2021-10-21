import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// import CardList from "./components/card-list/card-list.component";
// import KANA_DATA, { Kana } from "./kana.data";

import HomePage from "./pages/homepage.component";
import MatchingPage from "./pages/matching-page/matching-page.component";
import QuizPage from "./pages/quiz-page/quiz-page.component";
import Header from "./components/header/header.component";

// interface AppState {
//   kana_chars: Kana[];
// }

const App = () => {
  // const { kana_chars } = this.state;
  // const getFirstTenCards = kana_chars.filter((char: Kana) => char.id < 11);
  // console.log(getFirstTenCards);

  // const shuffled_kana_chars = [...kana_chars].sort(() => Math.random() - Math.random());
  // const getTenRandomCards = shuffled_kana_chars.slice(0,10);
  // console.log(getTenRandomCards);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/matching" component={MatchingPage} />
        <Route exact path="/quiz" component={QuizPage} />
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