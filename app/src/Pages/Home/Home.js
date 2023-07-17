import React from 'react';
import { ReactComponent as MetaImage } from '../../assets/home icon.svg'
import Hero from '../../Components/Hero/Hero'

function Home() {
    return (
        <>
            <meta name="description" content="Little Lemon Restaurant home page"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="some description"/>
            <meta name="og:image" content={MetaImage}/>
            <Hero />

        </>
    )
}

export default Home