import { useGameContext } from "./GameContext";

function GameContainer() {
  const { field, moleClick, score, toggleGame } = useGameContext();
  return (
    <section>
      <h1>Whack a Mole</h1>
      <div className="score-section">
        <p>Score: {score}</p>
        <p onClick={toggleGame}>Restart</p>
      </div>
      <ul className="game-grid">
        {field.map((bool, i) => {
          return bool ? (
            <li key={i} className="hole mole" onClick={moleClick}></li>
          ) : (
            <li key={i} className="hole"></li>
          );
        })}
      </ul>
    </section>
  );
}

export default GameContainer;
