import React, { Suspense, lazy } from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import ReactLenis from 'lenis/react'
import Loader from './components/Loader'

const RootLayouts = lazy(() => import('./components/layouts/RootLayouts'))
const Home = lazy(() => import('./components/pages/Home'))
const Contact = lazy(() => import('./components/pages/Contact'))
const Abouts = lazy(() => import('./components/pages/Abouts'))
const Services = lazy(() => import('./components/pages/Services'))
const Fleets = lazy(() => import('./components/pages/Fleets'))
const Blogs = lazy(() => import('./components/pages/Blogs'))
const Error = lazy(() => import('./components/pages/Error'))

function App () {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<RootLayouts />}>
              <Route index element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<Abouts/>} />
              <Route path="/service" element={<Services/>} />
              <Route path="/fleet" element={<Fleets/>} />
              <Route path="/blog" element={<Blogs/>} />
            </Route>
            <Route path="*" element={<Error/>} />
          </Routes>
        </Suspense>
      </ReactLenis>
    </>
  )
}

export default App