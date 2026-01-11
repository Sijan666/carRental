import React from 'react'
import Container from '../Container'

const Testimonial = () => {
    return (
        <>
        <div className="py-100">
            <div className="bg-[url('/src/assets/testimonial.png')] bg-center bg-cover bg-no-repeat py-10">
            <Container>
                <h3 className='w-165 text-[#181818] font-semibold text-[48px] pb-7.5'>See Why Speedy is the Top Choice for Car Rentals</h3>
                <p className='w-148.5 text-base text-[#454545] pb-12.5 leading-[180%]'>Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet molestie imperdiet quis enim varius. Vitae rutrum praesent a et cursus sagittis egestas blandit eget. </p>
                <p className='text-[#181818] text-[24px] italic w-168.5 leading-[180%] pb-7.5'>"I recently rented a car from Speedy and I was blown away by the level of service I received. The booking process was quick and easy, and the staff were friendly and helpful when I arrived to pick up my rental car”</p>
                <h4 className='text-[32px] font-semibold text-[#181818] pb-1.25'>James Andrew</h4>
                <p className='text-base font-semibold text-[#454545]'>Customer</p>
            </Container>
            </div>
        </div>
        </>
    )
}

export default Testimonial