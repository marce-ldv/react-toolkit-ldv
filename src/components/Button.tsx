/* eslint-disable @typescript-eslint/no-empty-interface */
import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { PropsWithChildren } from "react";

export interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton = ({
  children,
  ...props
}: PropsWithChildren<CustomButtonProps>) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButton;
