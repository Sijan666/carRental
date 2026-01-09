import React from 'react'

const Images = ({className , imgSrc}) => {
    return (
        <>
        <img className={`${className}`} src={imgSrc} />
        </>
    )
}

export default Images