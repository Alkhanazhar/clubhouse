import { useState } from "react";
import HomeCard from "../../components/HomeCard";
import TextInput from "../../components/TextInput/TextInput";
import axios from "axios";

/* eslint-disable react/prop-types */
const Phone = ({ onNext, style }) => {
  const [phone, setPhoneNumber] = useState("");
  const submit = async () => {
    try {
      const res = await axios.post("/send-otp", { phone: phone });
      console.log(res.data);
      onNext();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <HomeCard title={"☎️Enter your Phone Number"}>
        <TextInput
          type={"text"}
          placeholder={"+91 9600000096"}
          value={phone}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button className={style} onClick={submit}>
          next
        </button>
        <div style={{ color: "gray", margin: "10px 0" }}>
          By entering your number address your accepting our term and condition
          policy
        </div>
      </HomeCard>
    </div>
  );
};

export default Phone;
