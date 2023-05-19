import { PropsWithChildren } from 'react'

import { Box } from '@mui/material'
import MuiModal, { ModalProps as MuiModalProps } from '@mui/material/Modal'

import { modalStyles } from './styled'

interface ModalProps extends MuiModalProps {}

const Modal = ({ children, ...props }: PropsWithChildren<ModalProps>) => {
  return (
    <MuiModal aria-labelledby='modal' {...props}>
      <Box sx={modalStyles}>{children}</Box>
    </MuiModal>
  )
}

export default Modal
