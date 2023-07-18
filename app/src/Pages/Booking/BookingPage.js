import { useState} from "react";
import BookingForm from "../../Components/BookingForm/BookingForm"
import './styles.css'

const BookingPage = () => {

    const LCGRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var c = seed % m;
        return function () {
            return (c = c * a % m) / m;
        };
    }

    const findAvailableTimes = function(date) {
        let random = LCGRandom(date.getDate());
        let availableTimes = [];

        for(let i = 17; i <= 22; i++) {
            if(random() < 0.5) {
                availableTimes.push(i + ':00');
            }
            if(random() < 0.5) {
                availableTimes.push(i + ':30');
            }
        }
        return availableTimes;
    }

    const initializeTimes = () => {
        const today_date = new Date()
        const timeList = findAvailableTimes(today_date)
        const bookingTimes = timeList.map((freeTime, index) => {
            return { id: index + 1, time: freeTime };
          });
        return(
            bookingTimes
            // [{id:0,time:"17:00"},
            )
        }
        const [availableTimes ,setAvailableTimes] = useState(initializeTimes)

    const updateTimes = (id) => {
        const newTime = availableTimes.filter((item) => item.id !== parseInt(id))
        setAvailableTimes(newTime)
    }

    return (
        <>
            <section className="booking-page">
                <h1>Book a Table</h1>
                <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
            </section>

        </>
    )
}

export default BookingPage