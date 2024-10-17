import React from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import cn from "classnames";
import UserMenu from "./UserMenu";

function getLinkStyle({ isActive }) {
  // 함수의 파라미터로 isActive, isPending, isTransitioning 이 넘어온다.
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}

function Nav({ className }) {
  return (
    <div className={styles.dwonlineNav}>
      {" "}
      {/* 클래스명 변경 */}
      <Container className={styles.dwonlineContainer}>
        {" "}
        {/* 클래스명 변경 */}
        <Link to="/">
          <div className={styles.dwonlineLogo}>
            {" "}
            {/* 클래스명 변경 */}
            <span>DW</span>
            OS
          </div>
        </Link>
        <ul className={styles.dwonlineMenu}>
          {" "}
          {/* 클래스명 변경 */}
          <li>
            <NavLink to="/dwOnline/courses" style={getLinkStyle}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="/dwOnline/questions" style={getLinkStyle}>
              커뮤니티
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
