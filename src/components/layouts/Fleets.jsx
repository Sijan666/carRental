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
        <div className="py-25">
            <Container className={'text-center'}>
                <h3 className='text-[#181818] text-[48px] font-semibold w-285 mx-auto pb-7.5'>Choose Your Dream Car from Our Wide Range of Vehicles</h3>
                <p className='pb-25 text-base text-[#454545] w-232 mx-auto'>Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget. </p>
                <div className="filterPart">
                    <Flex className={'justify-center gap-x-25'}>
                        <Button data-filter=".popular" btnText={'Popular'} className={'[&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white px-20 py-7.5 bg-[#E8E8E8] text-[24px] font-semibold text-[#454545] hover:bg-[#EA002D] hover:text-[#FDFDFD] duration-300'}/>
                        <Button data-filter=".smallCar" btnText={'Small Car'} className={'[&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white px-20 py-7.5 bg-[#E8E8E8] text-[24px] font-semibold text-[#454545] hover:bg-[#EA002D] hover:text-[#FDFDFD] duration-300'}/>
                        <Button data-filter=".largeCar" btnText={'Large Car'} className={'[&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white px-20 py-7.5 bg-[#E8E8E8] text-[24px] font-semibold text-[#454545] hover:bg-[#EA002D] hover:text-[#FDFDFD] duration-300'}/>
                        <Button data-filter=".exclusiveCar" btnText={'Exclusive Car'} className={'[&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white px-20 py-7.5 bg-[#E8E8E8] text-[24px] font-semibold text-[#454545] hover:bg-[#EA002D] hover:text-[#FDFDFD] duration-300'}/>
                    </Flex>
                    <div className="productPart pt-25 flex flex-wrap gap-x-10.25 gap-y-10.25" ref={containerRef}>
                        <div className="mix popular smallCar">
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
                        <div className="mix smallCar ">
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
                        <div className="mix smallCar">
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
                        <div className="mix popular smallCar">
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
                        <div className="mix popular exclusiveCar">
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
                        <div className="mix largeCar exclusiveCar">
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