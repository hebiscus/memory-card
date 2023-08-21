interface CardProps {
    id: number,
    src: any,
    handleCardClick: any
}

function Card({id, src, handleCardClick}: CardProps) {
    return (
        <button onClick={handleCardClick}>
            <img src={src} id={`${id}`} alt='' height={"250px"} width={"250px"}></img>
        </button>
    )
}

export default Card;