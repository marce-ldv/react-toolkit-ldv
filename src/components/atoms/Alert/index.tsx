import { SentimentSatisfiedAlt as IconSuccess } from '@mui/icons-material'
import { AlertProps as MuiAlertProps, Alert as MuiAlert } from '@mui/material'

import { StyledAlert, IconStyle } from './styled'

export interface AlertProps extends MuiAlertProps {}

const Alert = ({
  children = 'Alert',
  variant = 'standard',
  onClose,
  ...props
}: AlertProps) => {
  return (
    <MuiAlert
      icon={<IconSuccess fontSize='large' sx={IconStyle} />}
      variant={variant}
      onClose={() => onClose}
      sx={StyledAlert}
      {...props}
    >
      {children}
    </MuiAlert>
  )
}

export default Alert
