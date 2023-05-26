import { useState } from 'react';

function Card(props) {

    return (
        <button id={props.id} onClick={props.handleCardClick}>
            <img></img>
        </button>
    )
}

export default Card;