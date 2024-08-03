import { useState } from 'preact/hooks'
import Main from './components/Main/Main'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main/>
    </>
  )
}

export default app
