import { lazy,Suspense } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'

const Login=lazy(()=> import('./pages/Login'));
const Home=lazy(()=> import('./pages/Home'));

function App() {
  return (
    <>
       <Suspense fallback={ <div className='verify'>
            <div className="spinner"></div>
          </div>}>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/home' element={<Home/>}/>
          </Routes>
       </Suspense>
    </>
  )
}

export default App
