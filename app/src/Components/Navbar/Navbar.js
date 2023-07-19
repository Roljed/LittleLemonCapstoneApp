import { Routes, Route, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg'

import './styles.css';

const Navbar = () => {
    return (
        <>
        <nav className="nav">
            <Logo/>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
            <Link to="/reservations" className="nav-item">Reservations</Link>
            <Link to="/order-online" className="nav-item">Order Online</Link>
            <Link to="/login" className="nav-item">Login</Link>
        </nav>
        </>
    )
}

export default Navbar
