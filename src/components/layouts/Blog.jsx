import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import blogImg from '../../assets/blogImg.png'
import Button from '../Button'

const Blog = () => {
    return (
        <>
        <div className="py-25">
            <Container className={''}>
                <h3 className='text-[#181818] text-[48px] font-semibold w-273.25 mx-auto pb-7.5 text-center'>Stay Up-to-Date with the Latest Car Rental Trends and Tips</h3>
                <p className='pb-25 text-base text-[#454545] w-273.25 mx-auto text-center'>Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget.</p>
                <div className="pt-25">
                    <Flex className={'justify-between gap-x-7.5'}>
                        <div className="w-1/3">
                            <Images imgSrc={blogImg}/>
                            <div className="pt-7.5">
                                <h4 className='text-[#181818] font-semibold text-[32px]'>How to Choose the Right Rental Car for Your Needs</h4>
                                <p className='pt-7.5 pb-10 text-base text-[#454545] w-127.5'>Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis e. </p>
                                <Button btnText={'Read More'} className={'px-15 py-5 bg-[#EA002D] text-[#FDFDFD] font-semibold text-base'}/>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <Images imgSrc={blogImg}/>
                            <div className="pt-7.5">
                                <h4 className='text-[#181818] font-semibold text-[32px]'>10 Tips for Saving Money on Your Next Car Rental</h4>
                                <p className='pt-7.5 pb-10 text-base text-[#454545] w-127.5'>Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis e. </p>
                                <Button btnText={'Read More'} className={'px-15 py-5 bg-[#EA002D] text-[#FDFDFD] font-semibold text-base'}/>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <Images imgSrc={blogImg}/>
                            <div className="pt-7.5">
                                <h4 className='text-[#181818] font-semibold text-[32px]'>5 Essential Items to Pack for Your Next Road Trip</h4>
                                <p className='pt-7.5 pb-10 text-base text-[#454545] w-127.5'>Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis e. </p>
                                <Button btnText={'Read More'} className={'px-15 py-5 bg-[#EA002D] text-[#FDFDFD] font-semibold text-base'}/>
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