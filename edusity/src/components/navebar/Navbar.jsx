import {react} from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
const Navbar = ()=>{


        return (
            <nav className='container'>
        <img src={logo} alt ="" className='logo' />
        <ul>
            <li>Home</li>
            <li>program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>

        )


}
export default Navbar