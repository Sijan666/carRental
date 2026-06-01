import React, { useEffect } from 'react';
import Container from '../Container';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000,
    //         once: false,
    //         mirror: true,
    //     });
    // }, []);

    return (
        <>
        <div className="py-16 lg:py-100">
            <div className="lg:bg-[url('/src/assets/testimonial.png')] bg-center bg-cover bg-no-repeat py-10 md:py-16">
            <Container className="px-4 lg:px-0">
                <h3 className='w-full lg:w-165 text-[#181818] font-semibold text-3xl md:text-4xl lg:text-[48px] pb-4 md:pb-7.5 leading-tight'>
                    See Why Speedy is the Top Choice for Car Rentals
                </h3>
                <p className='w-full lg:w-148.5 text-sm md:text-base text-[#454545] pb-8 md:pb-12.5 leading-[180%]'>
                    Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget. 
                </p>
                <p data-aos="fade-right" className='text-[#181818] text-lg md:text-xl lg:text-[24px] italic w-full lg:w-168.5 leading-[180%] pb-6 md:pb-7.5'>
                    "I recently rented a car from Speedy and I was blown away by the level of service I received. The booking process was quick and easy, and the staff were friendly and helpful when I arrived to pick up my rental car”
                </p>
                <h4 className='text-2xl md:text-[32px] font-semibold text-[#181818] pb-1 md:pb-1.25'>
                    James Andrew
                </h4>
                <p className='text-sm md:text-base font-semibold text-[#454545]'>
                    Customer
                </p>
            </Container>
            </div>
        </div>
        </>
    )
}

export default Testimonial;