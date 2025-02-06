
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import { Suspense } from 'react'

function App() {

  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/movies' element={<MoviesPage/>}></Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
