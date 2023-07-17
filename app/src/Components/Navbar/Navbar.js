import { Routes, Route, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg'

import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';


const Navbar = () => {
    return (
        <>
        <Logo/>
        <nav className="nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
            <Link to="/reservations" className="nav-item">Reservations</Link>
            <Link to="/order-online" className="nav-item">Order Online</Link>
            <Link to="/log-in" className="nav-item">Log In</Link>
        </nav>
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </>
    )
}

export default Navbar
