import { render } from '@testing-library/react'
import App from './App'

test('Something', () => {
  expect(1 + 1).toBe(2)
})

test('Render Component', () => {
  const { getByText } = render(<App />)
  expect(getByText('Vite + React')).toBeTruthy()
})
