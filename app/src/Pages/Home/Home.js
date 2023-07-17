import React from 'react';
import { ReactComponent as MetaImage } from '../../assets/home icon.svg'

function Home() {
    return (
        <>
            <meta name="description" content="Little Lemon Restaurant home page"/>
            <meta name="og:title" content="Little Lemon"/>
            <meta name="og:description" content="some description"/>
            <meta name="og:image" content={MetaImage}/>

            <h1>This is my home page</h1>
        </>
    )
}

export default Home