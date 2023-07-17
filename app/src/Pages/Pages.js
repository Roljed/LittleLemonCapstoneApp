import { Routes,Route, Navigate,useNavigate} from "react-router-dom"
import Home from "./Home/Home"



const Pages = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/reserve" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />} /> */}
            {/* <Route path="/confirmReservation" element={showConfirmComponent ? <ConfirmedBooking /> : <Navigate to="/" />} /> */}
        </Routes>
    )
}
export default Pages