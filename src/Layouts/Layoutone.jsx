import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Mobilenav from '../Components/Mobilenav/Mobilenav'
const Layoutone = () => {
  return (
     <>
     <Navbar/>
     <Mobilenav/>
     <Outlet/>
     </>
  )
}
export default Layoutone