
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Add from './Pages/Add'
import Detail from './Pages/Detail'
import Wishlist from './Pages/Wishlist'
import ClientLayout from './ClientLayout'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
     <Routes>
      <Route path= "/" element = {<ClientLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path = "add" element = {<Add/>}/>
        <Route path = ":id" element = {<Detail/>}/>
        <Route path = "wishlist" element = {<Wishlist/>}/>
      </Route>
      <Route paht = "*" element = {<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
