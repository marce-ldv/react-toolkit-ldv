import { PropsWithChildren } from 'react'

import { Button } from '@mui/material'
import type { ButtonProps } from '@mui/material'

import { BtnStyled } from './styled'

export interface CustomButtonProps extends ButtonProps {}

const CustomButton = ({
  children,
  ...props
}: PropsWithChildren<CustomButtonProps>) => {
  return (
    <Button sx={BtnStyled} {...props}>
      {children}
    </Button>
  )
}

export default CustomButton
