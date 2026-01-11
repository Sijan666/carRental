import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Button from '../Button'

const Banner = () => {
    return (
        <>
        <div className="bg-[url('/src/assets/bannerBg.png')] bg-cover bg-no-repeat bg-center py-25 relative ">
            <Container>
                <div className="left w-[42%] py-25">
                    <h1 className='text-[#181818] text-[48px] font-semibold'>Experience Ultimate Comfort and Convenience with <span className='text-[#EA002D]'>Speedy</span></h1>
                    <p className='py-10 w-137.5 text-[#454545] leading-[180%]'>Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis eni   varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget. </p>
                    <Button btnText={'Get Started'} className={'px-15 py-5 bg-[#EA002D] hover:bg-[#FDFDFD] hover:text-[#EA002D] font-semibold text-base text-white duration-300 '}/>
                    <Button btnText={'See All Cars'} className={'ml-5 px-15 py-5 bg-[#EA002D] hover:bg-[#FDFDFD] hover:text-[#EA002D] font-semibold text-base text-white duration-300'}/>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Banner