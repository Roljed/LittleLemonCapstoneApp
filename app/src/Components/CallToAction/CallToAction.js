import { useNavigate } from 'react-router-dom'
import RestaurantFood from '../../assets/restauranfood.jpg'
import './styles.css';

const CallToAction = () => {
    const navigate = useNavigate()

    const navigateToReservations = () => {
        navigate("/reservations")
    }

    return (
        <>
            <section className='hero'>
                <div className='hero-left'>
                    <h2 className='hero-title'>Little Lemon</h2>
                    <h4 className='hero-sub-title'>Chicago</h4>
                    <p className='hero-p'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button 
                        className='button-reserve-table'
                        onClick={navigateToReservations}
                        >Reserve a Table</button>
                </div>
                <div className='hero-right'>
                    <img className='hero-img' alt='Restaurant' src={RestaurantFood}/>
                </div>
            </section>
        </>
    )
}

export default CallToAction
