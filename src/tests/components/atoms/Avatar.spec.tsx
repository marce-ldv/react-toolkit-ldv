import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Avatar } from '../../../components/atoms'

describe('Avatar', () => {
  it('should render without crashes', () => {
    render(<Avatar />)
  })

  it('should render an avatar', () => {
    render(<Avatar />)
    expect(screen.getByRole('avatar')).toBeInTheDocument()
  })

  it('should render an avatar with image', () => {
    render(<Avatar src='https://picsum.photos/200' />)
    expect(screen.getByRole('avatar')).toBeInTheDocument()
  })

  it('should render an avatar with image and alt', () => {
    render(<Avatar src='https://picsum.photos/200' alt='avatar' />)
    expect(screen.getByRole('avatar')).toBeInTheDocument()
  })
})
