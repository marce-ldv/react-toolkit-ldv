import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { TagInfo } from '../../../components/atoms'

describe('TagInfo', () => {
  test('should render without crashes', () => {
    render(<TagInfo />)
  })

  test('should render a tag', () => {
    render(<TagInfo />)
    expect(screen.getByRole('tag')).toBeInTheDocument()
  })

  test('should render a tag with label', () => {
    render(<TagInfo label='test' />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  test('should render a tag with label in uppercase', () => {
    render(<TagInfo label='test' isUppercase />)
    expect(screen.getByText(/TEST/i)).toBeInTheDocument()
  })

  test('should render a tag with label in lowercase', () => {
    render(<TagInfo label='TEST' isUppercase={false} />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
