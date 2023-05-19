import { FunctionComponent } from 'react'

import { Container, Toolbar } from '@mui/material'
import MuiNavbar, { AppBarProps } from '@mui/material/AppBar'

import { navbarStyles, toolbarStyles } from './styled'
import { Avatar } from '../../atoms'

interface NavbarProps extends AppBarProps {
  Logo?: FunctionComponent
  avatar?: boolean
}

const Navbar = ({ Logo, avatar, ...props }: NavbarProps) => {
  return (
    <MuiNavbar sx={navbarStyles} {...props}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={toolbarStyles}>
          {Logo ? <Logo /> : <div />}
          {avatar && <Avatar data-testid='avatar' />}
        </Toolbar>
      </Container>
    </MuiNavbar>
  )
}

export default Navbar
