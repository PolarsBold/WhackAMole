import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const rand = Math.floor(Math.random() * 9);

  const initField = Array.from({ length: 9 }, (_, i) => i === rand);
  const [field, setField] = useState(initField);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highScore, setHighScore] = useState([]);

  const moleClick = () => {
    let randomField = Math.floor(Math.random() * field.length);
    let newField = field.map((_, i) => i === randomField);
    while (field[randomField]) {
      randomField = Math.floor(Math.random() * field.length);
      newField = field.map((_, i) => i === randomField);
    }
    setScore(score + 1);
    setField(newField);
  };

  const updateHighScore = () => {
    const newHighScore = [...highScore, score]
      .sort((a, b) => b - a)
      .slice(0, 5);
    setHighScore(newHighScore);
  };

  const toggleGame = () => {
    setIsPlaying(!isPlaying);
    updateHighScore();
    setScore(0);
  };

  const value = { field, isPlaying, toggleGame, moleClick, score, highScore };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context)
    throw Error("useGameContext must be used within a ThemeProvider");
  return context;
}
