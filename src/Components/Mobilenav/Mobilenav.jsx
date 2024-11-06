import './Mobilenav.css'
import { Link } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti"
import { useState } from 'react'
const Mobilenav = () => {
    // --------use state ----------
    const [show , setshow] = useState(false)
  return (
    <>
    <nav className='resp_nav'>
        <div className="container">
          <div className="resp_menu_row">
            <Link to={'/'} className="resp_logo"><img src="images/Logo.png" alt="logo" /></Link>
            <div className="resp_menu_bar">
                <div onClick={()=>setshow(!show)} className='resp_bar'>
                    <TiThMenu/>
                </div>
            </div>
          </div>
          {
            show &&
            <ul className='resp_menu'>
               <li><Link to={'#'}>About</Link></li>
               <li><Link to={'#'}>Features</Link></li>
               <li><Link to={'#'}>Pricing</Link></li>
               <li><Link to={'#'}>Testimonials</Link></li>
               <li><Link to={'#'}>Help</Link></li>
          </ul>
          }
        </div>
    </nav>
    </>
  )
}
export default Mobilenav