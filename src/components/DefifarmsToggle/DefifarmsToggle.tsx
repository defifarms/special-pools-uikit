import React from "react";
import {
  DefifarmsStack,
  DefifarmsInput,
  DefifarmsLabel,
} from "./StyledDefifarmsToggle";
import { DefifarmsToggleProps, scales } from "./types";

const DefifarmsToggle: React.FC<DefifarmsToggleProps> = ({
  checked,
  scale = scales.MD,
  ...props
}) => (
  <DefifarmsStack scale={scale}>
    <DefifarmsInput
      id={props.id || "defifarms-toggle"}
      scale={scale}
      type="checkbox"
      checked={checked}
      {...props}
    />
    <DefifarmsLabel
      scale={scale}
      checked={checked}
      htmlFor={props.id || "defifarms-toggle"}
    >
      <div className="defifarms">
        <div className="defifarms" />
        <div className="defifarms" />
        <div className="defifarms" />
      </div>
    </DefifarmsLabel>
  </DefifarmsStack>
);

DefifarmsToggle.defaultProps = {
  scale: scales.MD,
};

export default DefifarmsToggle;
