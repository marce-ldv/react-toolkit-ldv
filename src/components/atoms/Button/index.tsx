import { PropsWithChildren } from 'react'

// import { Button } from '@mui/material'

import { btnStyles } from './styled'
import { Button } from '../../../../components/ui/button'

export interface CustomButtonProps {}

const CustomButton = ({
  children,
  ...props
}: PropsWithChildren<CustomButtonProps>) => {
  return <Button {...props}>{children}</Button>
}

export default CustomButton
