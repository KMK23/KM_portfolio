import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <p>Here are some of my projects:</p>
      <ul>
        <li>
          <Link to="/diceGame">Dice Game</Link>
        </li>
        <li>
          <Link to="/project1">Project 1</Link>
        </li>
        <li>
          <Link to="/project2">Project 2</Link>
        </li>
        {/* 나머지 프로젝트들도 추가 */}
      </ul>
    </div>
  );
}

export default Main;
