import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Home } from './pages/Home'
import '@testing-library/jest-dom'

const setup = () => {
  const utils = render(<Home />)
  const inputQtd = screen.getByLabelText('QtdID')
  const inputName = screen.getByLabelText('NameID')
  return {
    inputQtd,
    inputName,
    ...utils,
  }
}
test('Something', () => {
  expect(1 + 1).toBe(2)
})

test('expect title, 2 inputs and button rendered', () => {
  const { getByText, getByLabelText } = render(<Home />)
  expect(getByText('Lista de compras')).toBeTruthy()
  expect(getByLabelText('NameID')).toBeTruthy()
  expect(getByLabelText('QtdID')).toBeTruthy()
  expect(getByText('Adicionar'))
})

test('when add qtd and name and press button add, values needs to be in screen', () => {
  const { inputQtd, inputName, getByText } = setup()
  fireEvent.change(inputQtd, { target: { value: '4' } })
  fireEvent.change(inputName, { target: { value: 'Café' } })
  fireEvent.click(getByText('Adicionar'))
  expect(getByText('4')).toBeTruthy()
  expect(getByText('Café')).toBeTruthy()
})

test('delete product when press in x', async () => {
  const { inputQtd, debug, inputName, getByText, getByLabelText, queryByText } =
    setup()
  fireEvent.change(inputQtd, { target: { value: '4' } })
  fireEvent.change(inputName, { target: { value: 'Café' } })
  fireEvent.click(getByText('Adicionar'))
  debug()
  fireEvent.click(getByLabelText('CloseButton'))
  await waitFor(() => {
    expect(queryByText('4')).not.toBeInTheDocument()
    expect(queryByText('Café')).not.toBeInTheDocument()
  })
})
