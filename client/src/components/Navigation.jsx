import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className="container " style={styles}>
      <div className="logo">
        <Link to="/">
          <span style={{ fontSize: "2rem" }}>👋🏻</span> Clubhouse
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
