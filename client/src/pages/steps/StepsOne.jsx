import { useState } from "react";
import Phone from "./Phone";
import Email from "./Email";
import styles from "./StepPhoneEmail.module.css";
import { Mail, PhoneIcon } from "lucide-react";

/* eslint-disable react/prop-types */
const StepsNumberAndEmail = ({ onNext }) => {
  const typeCom = {
    phone: Phone,
    email: Email,
  };

  const [typeComponent, setTypeComponent] = useState("phone");
  const Component = typeCom[typeComponent];
  return (
    <div>
      <div className={styles.cardWrapper}>
        <div className={styles.buttonWrapper}>
          <button
            className={`${
              typeComponent === "phone" ? styles.active : styles.deactive
            }`}
            onClick={() => setTypeComponent("phone")}
          >
            <PhoneIcon />
          </button>
          <button
            className={`${
              typeComponent === "email" ? styles.active : styles.deactive
            }`}
            onClick={() => setTypeComponent("email")}
          >
            <Mail />
          </button>
        </div>
        <Component onNext={onNext} style={styles.button} />
      </div>
    </div>
  );
};

export default StepsNumberAndEmail;
