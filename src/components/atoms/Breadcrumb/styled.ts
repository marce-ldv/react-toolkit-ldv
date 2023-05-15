import MuiNavigateNextIcon from '@mui/icons-material/NavigateNext'
import { styled } from '@mui/material/styles'

export const NavigateNextIcon = styled(MuiNavigateNextIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

export const StyledLink = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    textDecoration: 'underline',
  },
}))

export const StyledSpan = styled('span')(() => ({
  color: '#4B96D0',
  textDecoration: 'none',
  fontWeight: 700,
}))
