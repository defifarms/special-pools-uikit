import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const ModalHeader = styled.div<{ background?: string }>`
    align-items: center;
    background: ${({ background }) => background || '#3F09A1'};
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
    display: flex;
    padding: 12px 24px;
`

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
      <IconButton variant='text' onClick={onDismiss} aria-label='Close the dialog'>
          <CloseIcon fontSize={26} width={26} height={26} color='white' />
      </IconButton>
  )
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
      <IconButton variant='text' onClick={onBack} area-label='go back' mr='8px'>
          <ArrowBackIcon fontSize={26} color='white' />
      </IconButton>
  )
};

export const ModalContainer = styled(Box)<{ minWidth: string }>`
    overflow: hidden;
    background: ${({ theme }) => '#2C007C90'};
    box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-radius: ${({ theme }) => theme.radii.default};
    width: 100%;
    max-height: 100vh;
    z-index: ${({ theme }) => theme.zIndices.modal};
    backdrop-filter: blur(5px);

    ${({ theme }) => theme.mediaQueries.xs} {
        width: auto;
        min-width: ${({ minWidth }) => minWidth};
        max-width: 100%;
    }
`
