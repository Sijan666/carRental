import React, { useEffect, useRef } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Button from '../Button'
import Product from '../Product'
import productImg from '../../assets/productImg.png'
import stars from '../../assets/stars.png'

import mixitup from 'mixitup';

const Fleets = () => {

    const containerRef = useRef(null);
    useEffect(() => {
            if (containerRef.current) { 
            mixitup(containerRef.current, {
                animation: {
                    duration: 400,
                },
                selectors: {
                    target: '.mix'
                }
            });
        }
    },);

    return (
        <>
        <div className="py-16 md:py-25">
            <Container className={'text-center px-4 lg:px-0'}>
                <h3 className='text-[#181818] text-3xl md:text-4xl lg:text-[48px] font-semibold w-full max-w-4xl xl:w-285 mx-auto pb-5 md:pb-7.5 leading-tight'>
                    Choose Your Dream Car from Our Wide Range of Vehicles
                </h3>
                <p className='pb-10 md:pb-25 text-sm md:text-base text-[#454545] w-full max-w-3xl xl:w-232 mx-auto'>
                    Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget. 
                </p>
                <div className="filterPart">
                    <Flex className={'justify-center gap-4 lg:gap-x-10 xl:gap-x-25 flex-wrap'}>
                        <Button data-filter=".popular" btnText={'Popular'} className={'[&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white px-6 md:px-12 xl:px-20 py-3 md:py-5 lg:py-7.5 bg-[#E8E8E8] text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-[#454545] hover:bg-[#EA002D] hover:text-[#FDFDFD] duration-300 w-full sm:w-auto'}/>
                        <Button data-filter=".smallCar" btnText={'Small Car'} className={'[&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white px-6 md:px-12 xl:px-20 py-3 md:py-5 lg:py-7.5 bg-[#E8E8E8] text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-[#454545] hover:bg-[#EA002D] hover:text-[#FDFDFD] duration-300 w-full sm:w-auto'}/>
                        <Button data-filter=".largeCar" btnText={'Large Car'} className={'[&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white px-6 md:px-12 xl:px-20 py-3 md:py-5 lg:py-7.5 bg-[#E8E8E8] text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-[#454545] hover:bg-[#EA002D] hover:text-[#FDFDFD] duration-300 w-full sm:w-auto'}/>
                        <Button data-filter=".exclusiveCar" btnText={'Exclusive Car'} className={'[&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white px-6 md:px-12 xl:px-20 py-3 md:py-5 lg:py-7.5 bg-[#E8E8E8] text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-[#454545] hover:bg-[#EA002D] hover:text-[#FDFDFD] duration-300 w-full sm:w-auto'}/>
                    </Flex>
                    <div className="productPart pt-12 md:pt-25 flex flex-wrap justify-center gap-6 md:gap-x-10.25 md:gap-y-10.25" ref={containerRef}>
                        <div className="mix popular smallCar w-full sm:w-[calc(50%-12px)] lg:w-auto">
                            <Product 
                            productImg={productImg}
                            priceCurrency={'$'}
                            productPrice={'50.23'}
                            productTime={'/day'}
                            productRatings={stars}
                            productLocation={'California'}
                            productModel={'BMW M3 Series'}
                            productBtn={'Booking Now'}
                            />
                        </div>
                        <div className="mix smallCar w-full sm:w-[calc(50%-12px)] lg:w-auto">
                            <Product 
                            productImg={productImg}
                            priceCurrency={'$'}
                            productPrice={'36.23'}
                            productTime={'/day'}
                            productRatings={stars}
                            productLocation={'Washington'}
                            productModel={'BMW M4 Series'}
                            productBtn={'Booking Now'}
                            />
                        </div>
                        <div className="mix smallCar w-full sm:w-[calc(50%-12px)] lg:w-auto">
                            <Product 
                            productImg={productImg}
                            priceCurrency={'$'}
                            productPrice={'40.15'}
                            productTime={'/day'}
                            productRatings={stars}
                            productLocation={'Boston'}
                            productModel={'BMW M3 Series'}
                            productBtn={'Booking Now'}
                            />
                        </div>
                        <div className="mix popular smallCar w-full sm:w-[calc(50%-12px)] lg:w-auto">
                            <Product 
                            productImg={productImg}
                            priceCurrency={'$'}
                            productPrice={'48.36'}
                            productTime={'/day'}
                            productRatings={stars}
                            productLocation={'San Antonio'}
                            productModel={'BMW M3 Series'}
                            productBtn={'Booking Now'}
                            />
                        </div>
                        <div className="mix popular exclusiveCar w-full sm:w-[calc(50%-12px)] lg:w-auto">
                            <Product 
                            productImg={productImg}
                            priceCurrency={'$'}
                            productPrice={'58.89'}
                            productTime={'/day'}
                            productRatings={stars}
                            productLocation={'New York'}
                            productModel={'Porsche 911'}
                            productBtn={'Booking Now'}
                            />
                        </div>
                        <div className="mix largeCar exclusiveCar w-full sm:w-[calc(50%-12px)] lg:w-auto">
                            <Product 
                            productImg={productImg}
                            priceCurrency={'$'}
                            productPrice={'69.05'}
                            productTime={'/day'}
                            productRatings={stars}
                            productLocation={'San Diego'}
                            productModel={'Volvo XC90'}
                            productBtn={'Booking Now'}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Fleets