import React from 'react'
import Container from '../Container'
import Button from '../Button'

const Banner = () => {
    return (
        <>
        <div className="bg-[url('/src/assets/bannerBg.png')] bg-cover bg-no-repeat bg-center py-16 md:py-25 relative ">
            <Container className="px-4 lg:px-0">
                <div className="left w-full md:w-[70%] lg:w-[42%] py-10 md:py-25 mx-auto lg:mx-0 text-center lg:text-left">
                    <h1 className='text-[#181818] text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight md:leading-[1.2]'>
                        Experience Ultimate Comfort and Convenience with <span className='text-[#EA002D]'>Speedy</span>
                    </h1>
                    <p className='py-6 md:py-10 w-full lg:w-137.5 max-w-full text-[#454545] leading-[180%] mx-auto lg:mx-0'>
                        Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis eni  varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget. 
                    </p>
                    <Button 
                        btnText={'Get Started'} 
                        className={'px-8 md:px-15 py-4 md:py-5 bg-[#EA002D] hover:bg-[#FDFDFD] hover:text-[#EA002D] font-semibold text-base text-white duration-300 w-full sm:w-auto block sm:inline-block mb-4 sm:mb-0'}
                    />
                    <Button 
                        btnText={'See All Cars'} 
                        className={'sm:ml-5 px-8 md:px-15 py-4 md:py-5 bg-[#EA002D] hover:bg-[#FDFDFD] hover:text-[#EA002D] font-semibold text-base text-white duration-300 w-full sm:w-auto block sm:inline-block'}
                    />
                </div>
            </Container>
        </div>
        </>
    )
}

export default Banner