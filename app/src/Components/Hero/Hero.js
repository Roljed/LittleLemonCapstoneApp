import RestaurantFood from '../../assets/restauranfood.jpg'
import './styles.css';

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='hero-left'>
                    <h2 className='hero-title'>Little Lemon</h2>
                    <h4 className='hero-sub-title'>Chicago</h4>
                    <p className='hero-p'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                </div>
                <div className='hero-right'>
                    <img className='hero-img' alt='Restaurant' src={RestaurantFood}/>
                </div>
            </section>
        </>
    )
}

export default Hero
