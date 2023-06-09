import { AlertProps as MuiAlertProps, Alert as MuiAlert } from '@mui/material'

import { alertStyles, iconStyles } from './styled'
import SmileIcon from '../../../assets/icons/smile.svg'
import CustomIcon from '../CustomIcon'
export interface AlertProps extends MuiAlertProps {
  iconAlt?: string
}

const Alert = ({
  children = 'Alert',
  variant = 'standard',
  onClose,
  iconAlt = '',
  ...props
}: AlertProps) => {
  return (
    <MuiAlert
      icon={<CustomIcon src={SmileIcon} alt={iconAlt} style={iconStyles} />}
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
