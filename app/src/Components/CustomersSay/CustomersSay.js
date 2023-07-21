import './styles.css';
import CustomerReviewCard from "./CustomerReviewCard"

const customerTestimonials = [
    {
        name: "Bob Steward",
        getImageSrc: () => require("../../assets/customer_bob_steward.jpg"),
        rating: "⭐⭐⭐⭐⭐",
        review: "Best Mediterranean restaurant in the city."
    },
    {
        name: "Sofia Murray",
        getImageSrc: () => require("../../assets/customer_sofia_murray.jpg"),
        rating: "⭐⭐⭐⭐⭐",
        review: "Ask for the lemon dessert - you can't go wrong with it."
    },
    {
        name: "Terry Lopez",
        getImageSrc: () => require("../../assets/customer_terry_lopez.jpg"),
        rating: "⭐⭐⭐⭐⭐",
        review: "We had a bar mitzvah there on a Thursday evening. It was perfect."
    },
    {
        name: "Ian Sanchez",
        getImageSrc: () => require("../../assets/customer_ian_sanchez.jpg"),
        rating: "⭐⭐⭐⭐⭐",
        review: "We just appeared without reservation, and they made our space at the bar, which was perfect, looking at the sea. The atmosphere was excellent. The food is amazing."
    },
]

const CustomersSay = () => {
    const listItems = customerTestimonials.map(customer => {
        const itemCard = <CustomerReviewCard
                            name={customer.name}
                            image={customer.getImageSrc()}
                            rating={customer.rating}
                            review={customer.review}
        />
        return <li>{itemCard}</li>
    })

    return (
        <>
            <section className='customer-testimonials'>
                <header className='customer-header'>
                    <h2>Customer Testimonials</h2>
                </header>
                    <ul>
                        {listItems}
                    </ul>
            </section>
        </>
    )
}

export default CustomersSay