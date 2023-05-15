import { AlertProps as MuiAlertProps, Alert as MuiAlert } from '@mui/material'

import { alertStyles, IconStyles } from './styled'
import { CustomIcon } from '~/atoms'
import SmileIcon from '~/icons/smile.svg'
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
      icon={<CustomIcon src={SmileIcon} alt={iconAlt} style={IconStyles} />}
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
