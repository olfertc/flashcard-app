import React from "react";
import CardList from "../components/card-list/card-list.component";
import CHARACTERS, { Character } from "../character.data";

interface AppState {
    kana_chars: Character[];
}

class HomePage extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            kana_chars: CHARACTERS,
        };
    }

    render() {
        const { kana_chars } = this.state;
        
        return (<div className='home-page'>
            <h1> Let's Learn Japanese! </h1>
            <h2>Study</h2>
            <h3> click on a card to see the romaji translation </h3>
            <CardList kana_chars={kana_chars} />
        </div>
        );
    }
}

export default HomePage;