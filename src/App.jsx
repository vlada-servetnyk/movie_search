
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import { lazy, Suspense } from 'react'

const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));

function App() {


  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage/>} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
