import './styles.css'

const CustomerReviewCard = (props) => {
    return (
        <div className="customer-review-card">
            <div className="review-card-rating">
                <h4>Rating</h4>
                <h5>{props.rating}</h5>
            </div>
            <div className="review-card-img">
                <img className="customer-img" alt="customer" src={props.image}/>
                <h5>{props.name}</h5>
            </div>
            <div className="review-card-details">
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default CustomerReviewCard