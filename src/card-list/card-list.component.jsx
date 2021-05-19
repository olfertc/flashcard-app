import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = (props) => { // renders the list of cards (all)
    console.log(props);
    return <div className='card-list'>
    { props.kana_chars.map(kana_char => 
        <Card key={kana_char.id} kana_char={kana_char} />
    )}
        </div>
}

export default CardList;
