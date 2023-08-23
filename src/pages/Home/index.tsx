import { ChangeEvent, FormEvent, useState } from 'react'
import { InputComponent } from '../components/InputComponent'
import { ProductComponent } from '../components/ProductComponent'

export const Home: React.FC = () => {
  const [product, setProduct] = useState<{ name: string; quantity: string }>({
    name: '',
    quantity: '',
  })

  const [products, setProducts] = useState<
    { name: string; quantity: string }[]
  >([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name

    setProduct((prev) => ({ ...prev, [name]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    setProducts((prev) => [...prev, product])
    setProduct({
      name: '',
      quantity: '',
    })
  }

  const handleDelete = (name: string) => {
    setProducts((prev) => prev.filter((product) => product.name !== name))
  }

  return (
    <main className="flex flex-col flex-1 items-center justify-center">
      <div>
        <h1 className="my-8 text-3xl font-bold">Lista de compras</h1>
        <form action="" className="flex gap-2" onSubmit={handleSubmit}>
          <InputComponent
            placeholder="Qtd"
            name="quantity"
            testID="QtdID"
            className="w-24 text-center"
            onChange={handleChange}
            value={product.quantity}
          />
          <InputComponent
            testID="NameID"
            placeholder="Produto"
            name="name"
            onChange={handleChange}
            value={product.name}
          />
          <button
            type="submit"
            className="text-black bg-white rounded-md px-4 transition-all"
          >
            Adicionar
          </button>
        </form>

        <ul className="flex flex-col list-none my-4">
          {products.map((product, index) => (
            <ProductComponent
              handleDelete={handleDelete}
              product={product}
              myKey={index}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}
