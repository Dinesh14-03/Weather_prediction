import { useState } from 'react'
import { Routes,Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Login from './login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='home'>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
          </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
