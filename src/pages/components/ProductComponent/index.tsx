import { useState } from 'react'
import { Check, X } from 'lucide-react'

export const ProductComponent: React.FC<{
  product: { name: string; quantity: string }
  handleDelete: (name: string) => void
}> = ({ product, handleDelete }) => {
  const [done, setDone] = useState<boolean>(false)
  return (
    <li
      onClick={() => setDone((prev) => !prev)}
      className={`flex gap-2 p-3 items-center border border-white rounded-md ${
        done ? 'opacity-40 line-through' : ''
      }`}
    >
      {done && <Check className='text-green-400' />}
      <div className={`bg-white rounded-md text-center px-2 text-black `}>
        {product.quantity}
      </div>
      {product.name}

      <button
        onClick={() => handleDelete(product.name)}
        className='flex ml-auto justify-end'
      >
        <X />
      </button>
    </li>
  )
}
