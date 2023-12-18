import './App.css'
import RegisterPage from './pages/RegisterPage'
import Genre from './pages/Genre'
import Browse from './pages/Browse'
import {Routes , Route } from 'react-router-dom'
function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterPage/>} />
        <Route path='genre' element={<Genre/>} />
        <Route path='browse' element={<Browse/>} />
      </Routes>
    </>
  )
}

export default App
