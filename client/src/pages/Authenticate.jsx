import { useState } from "react";
import StepsNumberAndEmail from "./steps/StepsOne";
import StepsOtp from "./steps/StepsOtp";

const Authenticate = () => {
  const steps = {
    1: StepsNumberAndEmail,
    2: StepsOtp,
  };
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    setStep(step + 1);
  };
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Authenticate;
