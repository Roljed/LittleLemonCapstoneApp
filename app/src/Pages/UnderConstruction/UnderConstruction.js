import React from "react"

const UnderConstruction = () => {
    return (
        <>
            <div style={myComponentStyle}>
                <h1>This page is under construction.</h1>
            </div>
        </>
    )
}

const myComponentStyle = {
    display: 'flex',
    margin: '100px'
}

export default UnderConstruction