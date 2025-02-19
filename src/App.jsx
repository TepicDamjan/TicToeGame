import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './pages/Hero'
import '../src/styles/App.css'
import { VsCpu } from './pages/VsCpu';
import { VsPlayer } from './pages/VsPlayer';


function App() {

  return (

       <Router>
        <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/vscpu" element={<VsCpu />} />
      <Route path="/vsplayer" element={<VsPlayer/>} />

    </Routes>
      </Router>

   
    
  )
}

export default App
