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
  color = '#D500F94D',
  ...props
}: TagInfoProps) => {
  const getLabel = (label: string) =>
    isUppercase ? label.toUpperCase() : label

  const tagStyles = {
    ...tagInfoStyles,
    backgroundColor: color,
    color: '#000',
    borderRadius: 0,
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
