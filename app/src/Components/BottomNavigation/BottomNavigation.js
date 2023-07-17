// import img from "../Assets/icons_assets/restauranfood.jpg"
const BottomNavigation = () => {
    return(
        <section id="bottom-navigation" className="container-md">
            <div className="row">
                <div className="part img-part col-md-3">
                    {/* <img src={img} alt="..."/> */}
                </div>
                <div className="part col-md-3">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="...">Home</a></li>
                        <li><a href="...">About</a></li>
                        <li><a href="...">Menu</a></li>
                        <li><a href="...">Reservations</a></li>
                        <li><a href="...">Order Online</a></li>
                        <li><a href="...">Login</a></li>
                    </ul>
                </div>
                <div className="part col-md-3">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="...">Adress</a></li>
                        <li><a href="...">Phone number</a></li>
                        <li><a href="...">Email</a></li>
                    </ul>
                </div>
                <div className="part col-md-3">
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
export default BottomNavigation