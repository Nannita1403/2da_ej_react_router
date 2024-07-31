import './App.css'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App