import { Alert } from '@mui/material'
import { styled } from '@mui/system'

export const StyledAlert = styled(Alert)({
  backgroundImage:
    'linear-gradient(to right, #4caf50 0%, #4caf50 10%, #fff 10%, #fff 100%)',
  color: '#000',
  width: '652px',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
})

export const IconStyle = { color: 'white' }
