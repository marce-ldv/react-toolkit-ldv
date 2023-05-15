import MuiAvatar, { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar'

import { avatarStyles } from './styled'

interface AvatarProps extends MuiAvatarProps {}

const Avatar = ({ ...props }: AvatarProps) => {
  return <MuiAvatar sx={avatarStyles} {...props} role='avatar' />
}

export default Avatar
