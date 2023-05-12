import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Breadcrumb } from '../../../components/atoms'

const options = [
  { title: 'Administrador de usuarios', Link: () => <a href='/'>Admin</a> },
  { title: 'Listado de usuarios', Link: () => <a href='/'>Listado</a> },
  { title: 'Creación de usuarios' },
]

const optionsWithoutLink = [{ title: 'Administrador de usuarios' }]

describe('Breadcrumb', () => {
  test('should render without crashes', () => {
    render(<Breadcrumb options={options} />)
  })

  test('should render a breadcrumb', () => {
    render(<Breadcrumb options={options} />)
    expect(screen.getByRole('breadcrumb')).toBeInTheDocument()
  })

  test('should render a breadcrumb with 3 items', () => {
    render(<Breadcrumb options={options} />)
    const itemsQty = 3
    expect(screen.getAllByRole('listitem')).toHaveLength(itemsQty)
  })

  // test('should render a breadcrumb with 2 separators', () => {
  //   render(<Breadcrumb options={options} />)
  //   const separatorsQty = 2
  //   expect(screen.getAllByRole('separator')).toHaveLength(separatorsQty)
  // })

  test('should render a breadcrumb without separator', () => {
    render(<Breadcrumb options={optionsWithoutLink} />)
    expect(screen.queryByRole('separator')).not.toBeInTheDocument()
  })
})
