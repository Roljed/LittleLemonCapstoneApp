import './styles.css';

const Special = (props) => {
    return (
        <div className="special-card">
            <heading>
                <img className="special-dish" alt="special dish picture" src={props.imageSrc}/>
                <div className="dish-heading">
                    <h4 className="dish-name">{props.name}</h4>
                    <h4 className="dish-price">{props.price}</h4>
                </div>
            </heading>
            <main className="dish-details">
                <p>{props.description}</p>
            </main>
            <footer>
                <p>Order a delivery</p>
                <img className="delivery-icon" alt="delivery"/>
            </footer>
        </div>
    )
}

export default Special

