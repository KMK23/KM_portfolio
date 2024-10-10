import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main";
import DiceGameApp from "./projects/01_dice-game/src/App";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="diceGame" element={<DiceGameApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
