import React from "react";
import { Switch, Route , BrowserRouter as Router} from "react-router-dom";
import "./App.css";

// import CardList from "./components/card-list/card-list.component";
// import KANA_DATA, { Kana } from "./kana.data";

import HomePage from "./pages/homepage.component";
import MatchingPage from "./pages/matching/matching.component";
import QuizPage from "./pages/quiz/quiz.component";
import Header from "./components/header/header.component";

// interface AppState {
//   kana_chars: Kana[];
// }

class App extends React.Component<{}> {
 

  render() {
    // const { kana_chars } = this.state;
    // const getFirstTenCards = kana_chars.filter((char: Kana) => char.id < 11);
    // console.log(getFirstTenCards);
    
    // const shuffled_kana_chars = [...kana_chars].sort(() => Math.random() - Math.random());
    // const getTenRandomCards = shuffled_kana_chars.slice(0,10);
    // console.log(getTenRandomCards);

    return (
      <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/matching" component={MatchingPage} />
          <Route exact path="/quiz" component={QuizPage} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
