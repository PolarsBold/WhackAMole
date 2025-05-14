import { useGameContext } from "./GameContext";

function WelcomePage() {
  const { toggleGame, highScore } = useGameContext();
  return (
    <main>
      <h1>Whack a Mole</h1>
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={toggleGame}>Play</button>
      <h2>High Scores</h2>
      <ul>
        {highScore.map((score, i) => (
          <li key={i} className="score">
            {score}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default WelcomePage;
