import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Tags from './pages/Tags'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Tags/>}/>
    </Routes>
    </>
  )
}

export default App
