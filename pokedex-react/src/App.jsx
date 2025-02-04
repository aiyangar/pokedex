import { Route, BrowserRouter, Routes } from "react-router-dom"

import Home from "./pages/home/home.component"
import Detail from "./pages/detail/detail.component"
import Create from "./pages/create/create.component"

import "./App.css"


function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/home" element={<Home />}/>
          <Route path="/home/:id" element={<Detail />}/>
          <Route path="/create" element={<Create />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
