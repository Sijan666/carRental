import React from 'react'

const Images = ({ className, imgSrc, altText }) => {
    return (
        <img className={`${className}`} src={imgSrc} alt={altText} loading="lazy" />
    )
}

export default Images