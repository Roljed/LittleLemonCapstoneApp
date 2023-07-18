import React from 'react';
import { ReactComponent as MetaImage } from '../../assets/home icon.svg'
import CallToAction from '../../Components/CallToAction/CallToAction';
import SpecialCards from '../../Components/Specials/SpecialCards';
import CustomersSay from '../../Components/CustomersSay/CustomersSay';
import Chicago from '../../Components/Chicago/Chicago';

import './styles.css';

function Home() {
    return (
        <>
            <head>
                <title>Little Lemon Restaurant</title>
                <meta name="description" content="Little Lemon Restaurant home page"/>
                <meta name="og:title" content="Little Lemon"/>
                <meta name="og:description" content="some description"/>
                <meta name="og:image" content={MetaImage}/>
            </head>
            <body className='home'>
                <CallToAction />
                <SpecialCards />
                <CustomersSay />
                <Chicago />
            </body>

        </>
    )
}

export default Home