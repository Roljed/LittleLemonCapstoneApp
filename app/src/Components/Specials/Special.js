import { useNavigate } from 'react-router-dom';

import './styles.css';
import DeliveryIcon from "../../assets/scooter.svg"

const Special = (props) => {
    const navigate = useNavigate()

    const navigateToOrderOnline = () => {
        navigate("/order-online")
    }

    return (
        <div className="special-card">
            <heading>
                <img className="special-dish" alt="special dish" src={props.imageSrc}/>
                <div className="dish-heading">
                    <h4 className="dish-name">{props.name}</h4>
                    <h4 className="dish-price">{props.price}</h4>
                </div>
            </heading>
            <main className="dish-details">
                <p>{props.description}</p>
            </main>
            <button className="button-order-delivery" onClick={navigateToOrderOnline}>
                <p>Order a delivery</p>
                <img className="delivery-icon" alt="delivery" src={DeliveryIcon}/>
            </button>
        </div>
    )
}

export default Special

