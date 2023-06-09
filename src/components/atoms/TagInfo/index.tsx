import { Chip, ChipProps } from '@mui/material'

import { tagInfoStyles } from './styled'

interface TagInfoProps extends ChipProps {
  isUppercase?: boolean
  label?: string
}

const TagInfo = ({
  label = 'Usuarios',
  isUppercase = true,
  variant = 'filled',
  color,
  ...props
}: TagInfoProps) => {
  const getLabel = (label: string) =>
    isUppercase ? label.toUpperCase() : label

  const tagStyles = {
    ...tagInfoStyles,
    backgroundColor: color,
  }

  return (
    <Chip
      label={getLabel(label as string)}
      sx={tagStyles}
      variant={variant}
      role='tag'
      {...props}
    />
  )
}

export default TagInfo
