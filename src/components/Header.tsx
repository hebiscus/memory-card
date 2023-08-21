import '../App.css';

interface HeaderProps {
    currentScore: number,
    bestScore: number
}

// or: function Header({currentScore}: {currentScore: number}, {bestScore}: {bestScore: number} )
function Header({currentScore, bestScore}: HeaderProps): JSX.Element {
    return (
        <div className="header">
        <div className="points">
            <h4>Current Score: {currentScore}</h4>
            <h4>Best Score: {bestScore}</h4>
        </div>
            <h5>Don't click on the same image twice!</h5>
        </div>
    )
}

export default Header;