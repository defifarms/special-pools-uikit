import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps { }

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  border-top: 1px solid #4912BD;
  background-color: #300095;
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  return (
    <Container>
      <SocialEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
      </SocialEntry>
      <SettingsEntry>
        <Flex>
          <SocialLinks />
          <LangSelector
            currentLang={currentLang}
            langs={langs}
            setLang={setLang}
          />
        </Flex>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
