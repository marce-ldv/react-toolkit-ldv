import MockedAvatar from './assets/images/avatar.png'
import { Avatar, Button, Select } from './components/atoms'
import './index.css'

function App() {
  return (
    <main className='w-full h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>React Toolkit Ldv</h1>

      <Avatar src={MockedAvatar} />
      <Select />
      <Button>Button</Button>
    </main>
  )
}

export default App
