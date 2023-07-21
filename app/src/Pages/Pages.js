import { Routes,Route } from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"
import BookingPage from "./Booking/BookingPage"
import UnderConstruction from "./UnderConstruction/UnderConstruction"


const Pages = () => {
    return(
        <Routes >
            <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="reservations" element={<BookingPage/>} />
                <Route path="menu" element={<UnderConstruction/>} />
                <Route path="order-online" element={<UnderConstruction/>} />
                <Route path="login" element={<UnderConstruction/>} />
        </Routes>
    )
}
export default Pages