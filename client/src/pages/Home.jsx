import { ArrowRightIcon } from "lucide-react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  const authenticate = () => {
    navigate("/authenticate");
  };
  return (
    <div className={styles.cardWrapper}>
      <HomeCard title={"Welcome to clubhouse!"}>
        <p className={styles["text"]}>
          Connect, share, learn, and grow with our vibrant community. Your voice
          matters here. Enjoy the experience!
        </p>
        <Button
          onClick={authenticate}
          iconif={ArrowRightIcon}
          title={"get your user name"}
          styles={styles}
        />

        <div>
          Have an account &nbsp;
          <Link>Sign in</Link>
        </div>
      </HomeCard>
    </div>
  );
};

export default Home;
