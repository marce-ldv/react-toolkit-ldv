import MockedAvatar from './assets/images/avatar.png'
import Button from './components/atoms/Button'
import { AlertDialog } from '../components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Dialog } from '../components/ui/dialog'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import './index.css'

const boxStyles =
  'py-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'

function App() {
  return (
    <main className='w-full h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>React Toolkit Ldv</h1>

      <div className='py-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <h2 className='text-2xl font-bold'>Buttons</h2>
        <div className={boxStyles}>
          <Button variant='default'>Button</Button>
          <Button variant='outline'>Button</Button>
          <Button variant='link'>Button</Button>
          <Button variant='secondary'>Button</Button>
          <Button variant='destructive'>Button</Button>
        </div>

        <h2 className='text-2xl font-bold'>Inputs</h2>
        <div className={boxStyles}>
          <Input type='email' placeholder='Email' />
          <Input type='number' placeholder='Number' />
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='picture'>Picture</Label>
            <Input id='picture' type='file' />
          </div>
        </div>

        <h2 className='text-2xl font-bold'>Alert</h2>
        <div className={boxStyles}>
          <Dialog />
        </div>

        <h2 className='text-2xl font-bold'>Alert dialog</h2>
        <div className={boxStyles}>
          <AlertDialog />
        </div>

        <h2 className='text-2xl font-bold'>Select</h2>
        <div className={boxStyles}>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Theme' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <h2 className='text-2xl font-bold'>Avatar</h2>
        <div className={boxStyles}>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </main>
  )
}

export default App
