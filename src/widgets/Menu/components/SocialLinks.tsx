import React from "react";
import {useTheme} from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const SocialLinks: React.FC = () => {
  const theme = useTheme();
  
  return (
    <>
      {socials.map((social, index) => {
        const Icon = Icons[social.icon];
        const iconProps = {
          width: "24px",
          color: "white",
          style: { cursor: "pointer" },
        };
        const mr = index < socials.length - 1 ? "24px" : 0;
        return (
          <Link
            external
            key={social.label}
            href={social.href}
            aria-label={social.label}
            mr={mr}
          >
            <Icon {...iconProps} color={theme.colors.white} />
          </Link>
        );
      })}
    </>
  )
};

export default React.memo(SocialLinks, () => true);
