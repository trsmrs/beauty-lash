import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Scheduling from './pages/Scheduling';
function App() {
  

  return (
    <Routes>
       <Route index element={<Home />} />
       <Route path='/scheduling' element={<Scheduling />}/>
    </Routes>
  )
}

export default App
