import React from 'react'
import Container from '../Container'
import Images from '../Images'
import feature from '../../assets/feature.png'

const Feature = () => {
    return (
        <>
        <div className="py-25">
            <Container className={'text-center'}>
                <h3 className='text-[#181818] text-[48px] font-semibold w-285 mx-auto pb-7.5'>Discover Our Exclusive Features and Add-Ons for a Perfect Rental Experience</h3>
                <p className='pb-25 text-base text-[#454545] w-232 mx-auto'>Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget. </p>
                <Images imgSrc={feature}/>
            </Container>
        </div>
        </>
    )
}

export default Feature