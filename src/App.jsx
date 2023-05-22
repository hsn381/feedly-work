import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from './layout/DashboardLayout'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* define your routes here and if the component needs DashboardLayout wrap it inside it else */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
