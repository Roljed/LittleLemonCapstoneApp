import './styles.css'
import Restaurant from '../../assets/restaurant.jpg'


const Footer = () => {
    return(
        <section className="bottom-navigation">
            <div className="row">
                <div className="part img-part">
                    <img className='img-part' alt='Restaurant'src={Restaurant} />
                </div>
                <div className="part">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="part">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="...">Adress</a></li>
                        <li><a href="...">Phone number</a></li>
                        <li><a href="...">Email</a></li>
                    </ul>
                </div>
                <div className="part">
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><a href="...">Adress</a></li>
                        <li><a href="...">Phone number</a></li>
                        <li><a href="...">Email</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Footer