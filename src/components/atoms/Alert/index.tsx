import { SentimentSatisfiedAlt as IconSuccess } from '@mui/icons-material'
import { AlertProps as MuiAlertProps } from '@mui/material'

import { StyledAlert, IconStyle } from './styled'

export interface AlertProps extends MuiAlertProps {}

const Alert = ({
  children = 'Alert',
  variant = 'standard',
  onClose,
}: AlertProps) => {
  return (
    <StyledAlert
      icon={<IconSuccess fontSize='large' sx={IconStyle} />}
      variant={variant}
      onClose={() => onClose}
    >
      {children}
    </StyledAlert>
  )
}

export default Alert
