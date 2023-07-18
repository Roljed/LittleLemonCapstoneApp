import BookingImage from "../../assets/calendar.jpg"
import './styles.css'

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-section">
            <img src={BookingImage} alt="" />
            <h1>Confirmed!</h1>
            <p>Thank you!</p>
        </div>);
}

export default ConfirmedBooking;