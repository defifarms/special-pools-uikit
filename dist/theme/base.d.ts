import { MediaQueries, Breakpoints, Spacing } from "./types";
export declare const breakpointMap: {
    [key: string]: number;
};
export declare const shadows: {
    level1: string;
    active: string;
    success: string;
    warning: string;
    focus: string;
    inset: string;
    tooltip: string;
};
declare const _default: {
    siteWidth: number;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    shadows: {
        level1: string;
        active: string;
        success: string;
        warning: string;
        focus: string;
        inset: string;
        tooltip: string;
    };
    radii: {
        small: string;
        default: string;
        card: string;
        homeCorner: string;
        circle: string;
        rounded: string;
    };
    zIndices: {
        dropdown: number;
        modal: number;
    };
};
export default _default;
