import { useState } from "react";
import './styles.css'

const BookingForm = (props) => {

    const initialBooking = {
        date: "",
        time: "17",
        guests: "0",
        occasion: "none",
    }
    const [booking, setBooking] = useState(initialBooking)
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(booking)
        console.log(event)
        props.updateTimes(event.target[2].selectedOptions[0].id)
        // alert("Reservation submitted!");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label htmlFor="res-date">Choose date</label>
                        <input
                            type="date"
                            id="res-date"
                            onChange={(event) => setBooking({...booking, date: event.target.value})}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="res-time">Choose time</label>
                        <select
                            id="res-time"
                            onChange={(event) => setBooking({...booking, time: event.target.value})}
                        >
                            {props.availableTimes?.map(
                                    (obj)=>{
                                        return (
                                            <option
                                                value={obj.time}
                                                id={obj.id}
                                                key={obj.id}
                                            >{obj.time}</option>
                                        )
                                    }
                                )}
                        </select>
                    </div>
                    <div className="Field">
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            className='guests-input'
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            onChange={(event) => setBooking({...booking, guests: event.target.value})}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            onChange={(event) => setBooking({...booking, occasion: event.target.value})}
                        >
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <button type="submit">Make Your Reservation</button>
                </fieldset>
            </form>
        </>
    )
}

export default BookingForm