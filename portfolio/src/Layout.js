import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      {/* 공통 헤더 */}
      <header>
        <h1>My Portfolio</h1>
        {/* 네비게이션 */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/diceGame">Dice Game</Link>
            </li>
            <li>
              <Link to="/rspGame">Rock-Paper-Scissors Game</Link>
            </li>
            <li>
              <Link to="/moviepedia">Movie Pedia</Link>
            </li>
            <li>
              <Link to="/mbticolor">MBTI Color</Link>
            </li>
            <li>
              <Link to="/dwOnline">DW Online School</Link>
            </li>
            <li>
              <Link to="/foodList">Food List</Link>
            </li>
            <li>
              <Link to="/realtimeChatting">Real Time Chatting</Link>
            </li>
            <li>
              <Link to="/diary">Diary App</Link>
            </li>
            <li>
              <Link to="/shopApp">Shop App</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* 중첩된 라우트가 여기서 렌더링됨 */}
      <Outlet />

      {/* 공통 푸터 */}
      <footer>
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default Layout;
