import Nav from "./Nav";
import styles from "./App.module.scss";
import "./App.font.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./GlobalStyles.scss";

function App() {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
