import Special from "./Special"

import './styles.css';

const specials = [
    {
      title: "Greek salad",
      price: "$ 12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../../assets/greek salad.jpg"),
    },
    {
      title: "Bruchetta",
      price: "$ 5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("../../assets/bruchetta.jpg"),
    },
    {
      title: "Lemon Dessert",
      price: "$ 5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../../assets/lemon dessert.jpg"),
    },
];

const SpecialCards = () => {
    return (
        <>
            <div className="special-section">
                <h2 className="specials-title">These weeks specials!</h2>
                <div className="container-specials">
                    {specials.map((dish) => (
                    <Special
                        name={dish.title}
                        price={dish.price}
                        description={dish.description}
                        url=""
                        imageSrc={dish.getImageSrc()}
                    />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SpecialCards
