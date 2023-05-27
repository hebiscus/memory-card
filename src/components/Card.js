import { useState } from 'react';

function Card(props) {

    return (
        <button onClick={props.handleCardClick}>
            <img src={props.src} id={props.id} alt='' height={"250px"}></img>
        </button>
    )
}

export default Card;