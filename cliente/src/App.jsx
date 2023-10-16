
import { Route, Routes } from 'react-router-dom'
import Tags from './pages/Tags'
import TagForm from './pages/TagForm'
import Home from './pages/Home'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>,
      <Route path='/tags' element={<Tags/>}/>
      <Route path='/newTag' element={<TagForm/>}/>
    </Routes>
    </>
  )
}

export default App
