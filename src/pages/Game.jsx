import '../styles/game.css';

function Game() {
    const games = [
        { name: 'Chess Tournament', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdTRCpbDc0yv7E8_ILyst2ASks2x_LGx9NSn9rd73YHQ96BGw/viewform?usp=sharing' },
        { name: 'Jinga Tournament', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEDI-qd-PEaBjn4PBSzDuf4ZGS8rhiwYmSfRodmpUFnXCoMA/viewform?usp=sharing' },
        { name: 'Quiz Tournament', link: 'https://docs.google.com/forms/d/e/1FAIpQLSf3OnDKVbRJuYtdFsthv27bC6yMKRVnUd0nD27j_3OXEpuM_g/viewform?usp=sharing' },
        { name: 'Riddles Tournament', link: 'https://docs.google.com/forms/d/e/1FAIpQLSc2rXrPD-qEiQmBTLvht_cgordDbtUmPfskxKZPCBfydblGAQ/viewform?usp=sharing' },
        { name: 'Pictionary Tournament', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeeYfNGx05Nh9RSmFepohHz9PaR0smq2HBSepDdvuOCo09h1w/viewform?usp=sharing' },
        { name: "Rubik's Tournament", link: 'https://docs.google.com/forms/d/e/1FAIpQLSdlX1Nt_-qrQUiY4WdPq--2rR9Rt3h34rafbqVqarBOWCrNNg/viewform?usp=sharing' },
        { name: 'Sudoku Tournament', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeETwAo2q65DkXFNMMYJJIE7K3HYH0kf2sPFrpuTNEBjZ3jZw/viewform?usp=sharing' },
        { name: 'Puzzles Tournament', link: 'https://docs.google.com/forms/d/e/1FAIpQLScG7g85Issm5zNNbYoKSDc50mMqUnOmxyeMxCoAA8OcecfZFQ/viewform?usp=sharing' },
    ];

    return (
        <div className="game-page">
            <header>
                <h1>Welcome to Techmiya Games!!!</h1>
                <p>Click a game to begin the fun</p>
            </header>

            <div className="flyer-wrapper">
                <img className="flyer" src="/images/flyer.webp" alt="Game Flyer" />
            </div>

            <div className="games-container">
                {games.map((game, index) => (
                    <a key={index} href={game.link} target="_blank" rel="noopener noreferrer">
                        <button className="game-button">{game.name}</button>
                    </a>
                ))}
            </div>

            <footer>
                &copy; 2026 Techmiya Games. All rights reserved.
            </footer>
        </div>
    );
}

export default Game;
