import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import { Routes , Route } from 'react-router-dom'



function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
          {/* <Route path="/about" element={<About/>} /> */}
          {/* <Route path="*" element={<Error/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App