/* eslint-disable react/prop-types */

import HomeCard from "../../components/HomeCard";
import TextInput from "../../components/TextInput/TextInput";

const StepsOtp = ({ onNext }) => {
  return (
    <div className="cardWrapper">
      <HomeCard title={"🔒 Enter your OTP here"}>
        <TextInput type={"text"}></TextInput>
        <button onClick={onNext} className="button">
          next
        </button>
        <div>
          <p style={{color:"Gray",width:"70%",margin:"0 auto"}}>type your otp for setting up your username and avatar</p>
        </div>
      </HomeCard>
    </div>
  );
};

export default StepsOtp;
