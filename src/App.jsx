import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import {BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import H from "./pages/H"

function App() {


  return (
  <>
  <BrowserRouter>
  <Header/>

  </BrowserRouter>


  </>
  )
}

export default App
