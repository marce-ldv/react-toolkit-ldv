import { PropsWithChildren } from 'react'

import { Button } from '@mui/material'
import type { ButtonProps } from '@mui/material'

export interface CustomButtonProps extends ButtonProps {}

const CustomButton = ({
  children,
  ...props
}: PropsWithChildren<CustomButtonProps>) => {
  return <Button {...props}>{children}</Button>
}

export default CustomButton
