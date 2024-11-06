import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layoutone from './Layouts/Layoutone'
import Home from './Pages/Home'
function App() {
   const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<Layoutone/>}>
        <Route index element={<Home/>}/>
      </Route>
    )
   )
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}
export default App
