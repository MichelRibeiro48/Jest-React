import { InputComponent } from '../components/InputComponent'

export const Home: React.FC = () => {
  return (
    <main className='flex flex-col flex-1 items-center justify-center'>
      <form action=''>
        <InputComponent />
      </form>
    </main>
  )
}
