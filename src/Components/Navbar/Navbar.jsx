import { Link } from 'react-router-dom'
import'./Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='main_nav'>
        <div className="container">
            <div className="menu_row">
                <Link to={'/'} className="menu_logo"><img src="images/Logo.png" alt="logo" /></Link>
                <div className="main_menu">
                    <ul>
                        <li><Link to={'#'}>About</Link></li>
                        <li><Link to={'#'}>Features</Link></li>
                        <li><Link to={'#'}>Pricing</Link></li>
                        <li><Link to={'#'}>Testimonials</Link></li>
                        <li><Link to={'#'}>Help</Link></li>
                    </ul>
                </div>
             <div className="menu_buttons">
                 <Link className='button1' to={'#'}>Sign In</Link>
                 <Link className='button2' to={'#'}>Sign Up</Link>
             </div>
            </div>
        </div>

    </nav>
    </>
  )
}
export default Navbar