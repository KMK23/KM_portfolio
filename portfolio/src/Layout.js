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
              <Link to="/project1">Project 1</Link>
            </li>
            <li>
              <Link to="/project2">Project 2</Link>
            </li>
            {/* 나머지 프로젝트도 여기에 추가 */}
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
