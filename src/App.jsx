import WelcomePage from "./WelcomePage";
import { useGameContext } from "./GameContext";
import GameContainer from "./GameContainer";

export default function App() {
  const { isPlaying } = useGameContext();
  return isPlaying ? (
    <>
      <GameContainer />
    </>
  ) : (
    <>
      <WelcomePage />
    </>
  );
}
