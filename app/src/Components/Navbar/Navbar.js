import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg'

import './styles.css';

const Navbar = () => {
    const navStyle = ({ isActive }) => ({
        background: isActive ? "#F4CE14" : "",
      })
    return (
        <>
        <nav>
            <Logo/>
            <NavLink to="/" className="nav-item" style={navStyle}>Home</NavLink>
            <NavLink to="/about" style={navStyle}>About</NavLink>
            <NavLink to="/menu" style={navStyle}>Menu</NavLink>
            <NavLink to="/reservations" style={navStyle}>Reservations</NavLink>
            <NavLink to="/order-online" style={navStyle}>Order Online</NavLink>
            <NavLink to="/login" style={navStyle}>Login</NavLink>
        </nav>
        </>
    )
}

export default Navbar
