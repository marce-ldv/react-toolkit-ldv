/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC } from "react";

import { SentimentSatisfiedAlt as IconSuccess } from "@mui/icons-material";
import { AlertProps as MuiAlertProps } from "@mui/material";

import { StyledAlert, IconStyle } from "./styled";

export interface AlertProps extends MuiAlertProps {}

const Alert: FC<AlertProps> = ({
  children = "Alert",
  variant = "standard",
  onClose,
}) => {
  return (
    <StyledAlert
      icon={<IconSuccess fontSize="large" sx={IconStyle} />}
      variant={variant}
      onClose={() => {
        onClose;
      }}
    >
      {children}
    </StyledAlert>
  );
};

export default Alert;