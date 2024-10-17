import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import DiceGameApp from "./projects/01_dice-game/src/App";
import RspGameApp from "./projects/02_rsp-game/src/App";
import MoviePediaApp from "./projects/03-moviepedia/src/App";
import MbtiColor from "./projects/04_mbti-color/src/App";
import FoodListApp from "./projects/06_foodList/src/components/App";
import Main from "./projects/05_DW-onlineSchool/src/Main";
import RealTimeChatting from "./projects/07_realtime-chatting/src/App";
import DiaryApp from "./projects/08_diary/src/App";
import ShopApp from "./projects/09_shop-app/src/App";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Main />} /> */}
          <Route path="diceGame" element={<DiceGameApp />} />
          <Route path="rspGame" element={<RspGameApp />} />
          <Route path="moviepedia" element={<MoviePediaApp />} />
          <Route path="moviepedia" element={<MoviePediaApp />} />
          <Route path="mbticolor" element={<MbtiColor />} />
          <Route path="dwOnline" element={<Main />} />
          <Route path="foodList" element={<FoodListApp />} />
          <Route path="realtimeChatting" element={<RealTimeChatting />} />
          <Route path="diary" element={<DiaryApp />} />
          <Route path="shopApp" element={<ShopApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
