import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales, HeadingProps } from "./types";

const style = {
    [scales.MD]: {
        fontSize: '24px',
        fontSizeLg: '24px',
    },
    [scales.LG]: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '28px',
        fontSizeLg: '42px',
        lineHeight: '120%',
    },
    [scales.XL]: {
        fontSize: '30px',
        fontSizeLg: '36px',
    },
    [scales.XXL]: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '48px',
        fontSizeLg: '48px',
        lineHeight: '72px',
    },
}

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
    font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
    font-weight: 500;
    font-family: HK Grotesk;

    ${({ theme }) => theme.mediaQueries.lg} {
        font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
    }
`

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
