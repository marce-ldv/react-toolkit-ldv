import { SentimentSatisfiedAlt as IconSuccess } from '@mui/icons-material'
import { AlertProps as MuiAlertProps, Alert as MuiAlert } from '@mui/material'

import { alertStyles, iconStyles } from './styled'

export interface AlertProps extends MuiAlertProps {}

const Alert = ({
  children = 'Alert',
  variant = 'standard',
  onClose,
  ...props
}: AlertProps) => {
  return (
    <MuiAlert
      icon={<IconSuccess fontSize='large' sx={iconStyles} />}
      variant={variant}
      onClose={() => onClose}
      sx={alertStyles}
      {...props}
    >
      {children}
    </MuiAlert>
  )
}

export default Alert
