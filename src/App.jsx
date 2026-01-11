import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import { Routes , Route } from 'react-router-dom'



function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="*" element={<Error/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App