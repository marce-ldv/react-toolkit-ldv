import { FC } from 'react'

import { Chip, ChipProps } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

import { tagStyles } from './styled'

interface Props extends ChipProps {
  isUppercase?: boolean
  tags: string[]
}

const TagSpread: FC<Props> = ({ variant = 'filled', tags, ...props }) => {
  const tagsLength = tags.length
  const sanitizeTags = tags.map(tag => tag.toUpperCase()).join(', ')

  return (
    <Tooltip title={sanitizeTags} arrow>
      <Chip
        label={`...(${tagsLength})`}
        sx={tagStyles}
        variant={variant}
        {...props}
      />
    </Tooltip>
  )
}

export default TagSpread
