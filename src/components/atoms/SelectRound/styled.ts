import { styled } from '@mui/material/styles'

export const StyledDropdownChecks = styled('div')(({ theme }) => ({
  width: '353px',
  height: '320px',
  border: '1px solid #D8DADB',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
}))

export const StyledSearch = styled('div')(() => ({
  width: '319px',
  height: '50px',
  borderBottom: '1px solid #D8DADB',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '2px',
  marginRight: '11px',
  gap: '12px',
  color: '#383838',
  alignSelf: 'center',
  fontSize: '14px',
  fontWeight: 500,
}))
export const StyledOptionsContainer = styled('div')(() => ({
  height: '204px',
  width: '342px',
  overflowY: 'scroll',
  overflowX: 'hidden',
  zIndex: 1,
  backgroundColor: '#fff',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: 0,
    border: '1px solid #d8dadb',
    backgroundColor: '#ffffff',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#7a7a7a',
    borderRadius: '100px',
  },
}))
interface StyledOptionProp {
  selected?: boolean
}
export const StyledOption = styled(StyledSearch)<StyledOptionProp>(
  ({ selected }) => ({
    color: selected ? '#4B96D0' : '#383838',
    width: '314px',
    paddingLeft: '6px',
    marginRight: 0,
    marginLeft: '14px',
    cursor: 'pointer',
    '&:last-child': {
      zIndex: -1,
    },
  }),
)

export const ButtonsContainer = styled('div')(() => ({
  width: '100%',
  boxSizing: 'border-box',
  height: '38px',
  marginRight: '24px',
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '12px',
  zIndex: 999,
  backgroundColor: '#fff',
  alignSelf: 'flex-end',
  svg: {
    cursor: 'pointer',
  },
}))

export const StyledSearchForm = styled('input')(() => ({
  border: 0,
  borderBottom: '1px solid transparent',
  '&:focus': {
    border: 0,
    outline: 'none',
    borderBottom: '1px solid grey',
  },
}))

export const HiddenInputStyles = {
  position: 'fixed',
  top: 0,
  zIndex: -1,
  width: 0,
  height: 0,
  border: 0,
  '*': {
    width: 0,
    height: 0,
    border: 0,
  },
}
