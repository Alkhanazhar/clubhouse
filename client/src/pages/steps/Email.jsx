import HomeCard from "../../components/HomeCard";
import TextInput from "../../components/TextInput/TextInput";

/* eslint-disable react/prop-types */
const Email = ({ onNext, style }) => {
  return (
    <div>
      <HomeCard title={"✉️Enter your Email ID"}>
        <TextInput type={"email"} placeholder={"email@gmail.com"} />

        <button onClick={onNext} className={style}>
          next
        </button>
        <div style={{ color: "gray", margin: "10px 0" }}>
          By entering your email address your accepting our term and condition
          policy
        </div>
      </HomeCard>
    </div>
  );
};

export default Email;
