import React, { useState } from "react";
import DefifarmsToggle from "./DefifarmsToggle";

export default {
  title: "Components/DefifarmsToggle",
  component: DefifarmsToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <DefifarmsToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <DefifarmsToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
