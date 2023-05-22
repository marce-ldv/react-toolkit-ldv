import { PropsWithChildren } from 'react'

// import { Button } from '@mui/material'
import type { ButtonProps } from '@mui/material'

import { btnStyles } from './styled'

export interface CustomButtonProps extends ButtonProps {}

const CustomButton = ({
  children,
  ...props
}: PropsWithChildren<CustomButtonProps>) => {
  return (
    <button sx={btnStyles} {...props}>
      {children}
    </button>
  )
}

export default CustomButton
