import { InputComponentProps } from './types'

export const InputComponent: React.FC<InputComponentProps> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={`bg-transparent border border-white rounded-md text-lg p-3 ${className}`}
      {...props}
    />
  )
}
