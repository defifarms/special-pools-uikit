import React from "react";
interface Props {
    onClick?: () => void;
    expanded?: boolean;
    color?: string;
}
export declare const ExpandableButton: React.FC<Props>;
export declare const ExpandableLabel: React.FC<Props>;
export {};
