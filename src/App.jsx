import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Abouts from './components/pages/Abouts'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import { Routes , Route } from 'react-router-dom'
import Services from './components/pages/Services'
import Fleets from './components/pages/Fleets'
import Blogs from './components/pages/Blogs'
import Error from './components/pages/Error'
import ReactLenis from 'lenis/react'



function App () {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
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
      </ReactLenis>
    </>
  )
}

export default App