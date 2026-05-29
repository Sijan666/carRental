import React from 'react'
import Container from '../Container'
import Images from '../Images'
import feature from '../../assets/feature.png'

const Feature = () => {
    return (
        <>
        <div className="py-16 md:py-25">
            <Container className={'text-center px-4 lg:px-0'}>
                <h3 className='text-[#181818] text-3xl md:text-4xl lg:text-[48px] font-semibold w-full max-w-5xl xl:w-285 mx-auto pb-5 md:pb-7.5 leading-tight lg:leading-[1.2]'>
                    Discover Our Exclusive Features and Add-Ons for a Perfect Rental Experience
                </h3>
                <p className='pb-10 md:pb-25 text-sm md:text-base text-[#454545] w-full max-w-3xl xl:w-232 mx-auto leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget. 
                </p>
                <div className="px-2 sm:px-0">
                    <Images imgSrc={feature} className="w-full h-auto max-w-full mx-auto" />
                </div>
            </Container>
        </div>
        </>
    )
}

export default Feature