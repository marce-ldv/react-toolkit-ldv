import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Navbar } from '../../../components/molecules'

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar />)
  })

  test('renders Navbar component with Logo', () => {
    render(<Navbar Logo={() => <h1>Logo</h1>} />)
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  test('renders Navbar component with Avatar', () => {
    render(<Navbar avatar={true} />)
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
  })

  test('renders Navbar component with Logo and Avatar', () => {
    render(<Navbar Logo={() => <h1>Logo</h1>} avatar={true} />)
    expect(screen.getByText('Logo')).toBeInTheDocument()
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
  })
})
