import React from 'react';
import FlipCard from '../flip-card/flip-card.component';
import { Character } from "../../character.data";
import './card-list.styles.scss';

interface CardListProps {
    characters: Character[]
  }

const CardList = ({ characters }: CardListProps) => { // renders the list of all cards
    // console.log(props);

    return (
    <div className='card-list'>
    { characters.map(kana_char => 
        <FlipCard key={kana_char.id} kana_char={kana_char} />
    )}
        </div>
    );
}

export default CardList;
