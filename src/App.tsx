
import './App.css'
import { Button } from './components/ui/button'
function App() {
  
  return (
    <>
      <div className='text-3xl font-bold underline'> Hello world</div>
      <Button variant={"default"}>Default Button</Button>
      <Button variant={"secondary"}>Secondary Button</Button>
      <Button variant={"outline"}>Outline Button</Button>
      <Button variant={"destructive"}>Destructive Button</Button>
      <Button variant={"link"}>Link Button</Button>
      <Button variant={"ghost"}>Ghost Button</Button>

    </>
  )
}

export default App
