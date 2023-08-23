import { InputComponentProps } from './types'

export const InputComponent: React.FC<InputComponentProps> = ({
  className,
  testID,
  ...props
}) => {
  return (
    <input
      className={`bg-transparent border border-white rounded-md text-lg p-3 ${className}`}
      aria-label={testID}
      {...props}
    />
  )
}
