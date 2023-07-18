import './styles.css'

const Chicago = () => {

    const picA = require("../../assets/Mario and Adrian A.jpg")
    const picB = require("../../assets/Mario and Adrian B.jpg")

    return (
        <>
            <section className="chicago-section">
                <section className="about">
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                    <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who
                        moved to the United States to pursue their shared dream of owning a
                        restaurant.</p>
                    <p>To craft the menu, Mario relies on family recipes and his experience
                    as a chef in Italy.</p>
                </section>
                <section className="pictures">
                    <img className="chicago-img a" alt="adrian-mario-a" src={picA}/>
                    <img className="chicago-img b" alt="adrian-mario-b" src={picB}/>
                </section>
            </section>
        </>
    )
}

export default Chicago