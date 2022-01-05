import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";

interface Props {
  onClick?: () => void;
  expanded?: boolean;
  color?: string;
}

export const ExpandableButton: React.FC<Props> = ({
  onClick,
  expanded,
  children,
  color = 'invertedContrast',
}) => {
  return (
    <IconButton color={color} aria-label="Hide or show expandable content" onClick={onClick}>
      {children}
      {expanded ? (
        <ChevronUpIcon color={color} />
      ) : (
        <ChevronDownIcon color={color} />
      )}
    </IconButton>
  );
};
ExpandableButton.defaultProps = {
  expanded: false,
};

export const ExpandableLabel: React.FC<Props> = ({
  onClick,
  expanded,
  children,
  color = 'primary',
}) => {
  return (
    <Button
      variant="text"
      aria-label="Hide or show expandable content"
      onClick={onClick}
      color={color}
      endIcon={
        expanded ? (
          <ChevronUpIcon color={color} />
        ) : (
          <ChevronDownIcon color={color} />
        )
      }
    >
      {children}
    </Button>
  );
};
ExpandableLabel.defaultProps = {
  expanded: false,
};
