import { AlertProps as MuiAlertProps, Alert as MuiAlert } from '@mui/material'

import { alertStyles, IconStyles } from './styled'
import SmileIcon from '../../../assets/icons/smile.svg'
import { CustomIcon } from '../index'
export interface AlertProps extends MuiAlertProps {}

const Alert = ({
  children = 'Alert',
  variant = 'standard',
  onClose,
  ...props
}: AlertProps) => {
  return (
    <MuiAlert
      icon={<CustomIcon src={SmileIcon} alt='smile' style={IconStyles} />}
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
