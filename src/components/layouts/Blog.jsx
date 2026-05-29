import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import blogImg from '../../assets/blogImg.png'
import Button from '../Button'

const Blog = () => {
    return (
        <>
        <div className="py-16 md:py-25">
            <Container className="px-4 lg:px-0">
                <h3 className='text-[#181818] text-3xl md:text-4xl lg:text-[48px] font-semibold w-full max-w-5xl mx-auto pb-4 md:pb-7.5 text-center leading-tight'>
                    Stay Up-to-Date with the Latest Car Rental Trends and Tips
                </h3>
                <p className='pb-10 md:pb-25 text-sm md:text-base text-[#454545] w-full max-w-5xl mx-auto text-center leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget.
                </p>
                <div className="pt-4 md:pt-10">
                    <Flex className={'flex-col lg:flex-row justify-between gap-y-12 lg:gap-y-0 lg:gap-x-7.5'}>
                        {/* Blog Card 1 */}
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <Images imgSrc={blogImg} className="w-full h-auto object-cover rounded-md lg:rounded-none" />
                            <div className="pt-6 md:pt-7.5 flex flex-col items-center lg:items-start w-full">
                                <h4 className='text-[#181818] font-semibold text-2xl lg:text-[32px] leading-tight'>
                                    How to Choose the Right Rental Car for Your Needs
                                </h4>
                                <p className='pt-4 pb-6 md:pt-7.5 md:pb-10 text-sm md:text-base text-[#454545] w-full leading-relaxed'>
                                    Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis e. 
                                </p>
                                <Button btnText={'Read More'} className={'px-8 md:px-15 py-3 md:py-5 bg-[#EA002D] hover:bg-[#c90026] duration-300 text-[#FDFDFD] font-semibold text-sm md:text-base w-full sm:w-auto'}/>
                            </div>
                        </div>
                        {/* Blog Card 2 */}
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <Images imgSrc={blogImg} className="w-full h-auto object-cover rounded-md lg:rounded-none" />
                            <div className="pt-6 md:pt-7.5 flex flex-col items-center lg:items-start w-full">
                                <h4 className='text-[#181818] font-semibold text-2xl lg:text-[32px] leading-tight'>
                                    10 Tips for Saving Money on Your Next Car Rental
                                </h4>
                                <p className='pt-4 pb-6 md:pt-7.5 md:pb-10 text-sm md:text-base text-[#454545] w-full leading-relaxed'>
                                    Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis e. 
                                </p>
                                <Button btnText={'Read More'} className={'px-8 md:px-15 py-3 md:py-5 bg-[#EA002D] hover:bg-[#c90026] duration-300 text-[#FDFDFD] font-semibold text-sm md:text-base w-full sm:w-auto'}/>
                            </div>
                        </div>
                        {/* Blog Card 3 */}
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <Images imgSrc={blogImg} className="w-full h-auto object-cover rounded-md lg:rounded-none" />
                            <div className="pt-6 md:pt-7.5 flex flex-col items-center lg:items-start w-full">
                                <h4 className='text-[#181818] font-semibold text-2xl lg:text-[32px] leading-tight'>
                                    5 Essential Items to Pack for Your Next Road Trip
                                </h4>
                                <p className='pt-4 pb-6 md:pt-7.5 md:pb-10 text-sm md:text-base text-[#454545] w-full leading-relaxed'>
                                    Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis e. 
                                </p>
                                <Button btnText={'Read More'} className={'px-8 md:px-15 py-3 md:py-5 bg-[#EA002D] hover:bg-[#c90026] duration-300 text-[#FDFDFD] font-semibold text-sm md:text-base w-full sm:w-auto'}/>
                            </div>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Blog