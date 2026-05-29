import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import aboutImg from '../../assets/aboutImg.png'

const About = () => {
    return (
        <>
        <div className="py-16 lg:py-37.5 xl:py-75">
            <Container className={'px-4 lg:px-0'}>
                <h4 className='text-[#454545] font-semibold text-[20px] md:text-[24px] pb-4 md:pb-5 text-center lg:text-left'>
                    About Speedy
                </h4>
                <Flex className={'flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-12 xl:gap-x-25 items-start'}>
                    <div className="w-full lg:w-1/2">
                        <h3 className='text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#181818] pb-10 lg:pb-20 xl:pb-42 w-full xl:w-152.5 leading-tight text-center lg:text-left mx-auto lg:mx-0'>
                            Discover the Difference with Our Car Rentals
                        </h3>
                        <p className='text-sm md:text-base text-[#454545] w-full xl:w-138.75 leading-[180%] text-center lg:text-left mx-auto lg:mx-0'>
                            Lorem ipsum dolor sit amet consectetur. Malesuada turpis sem pellentesque suscipit sit vel. Id sem elementum adipiscing sed pulvinar quisque. Eu ut sagittis facilisi porttitor posuere eget in lacus. Justo sagittis rhoncus morbi id sed id cras quis. Tempus elementum mauris faucibus felis eleifend placerat. 
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 pb-8 lg:pb-12.5 text-center lg:text-left">
                        <p className='text-sm md:text-base text-[#454545] leading-[180%]'>
                            Lorem ipsum dolor sit amet consectetur. Malesuada turpis sem pellentesque suscipit sit vel. Id sem elementum adipiscing sed pulvinar quisque. Eu ut sagittis facilisi porttitor posuere eget in lacus. Justo sagittis rhoncus morbi id sed id cras quis. Tempus elementum mauris faucibus felis eleifend placerat. Quam sed fusce id molestie amet quis tortor porta lorem. Sed commodo et in congue at in amet vivamus iaculis. Amet in duis eu in non nunc adipiscing egestas. Ultricies morbi at ut nec luctus. Blandit convallis a blandit eget sagittis. Amet varius suspendisse odio molestie. Ullamcorper laoreet dictum semper augue et dui vestibulum imperdiet cum. Laoreet in scelerisque nulla in vulputate malesuada dictumst vitae diam. Volutpat sed arcu urna sem eu ornare et facilisis sed.
                        </p>
                        <p className='text-sm md:text-base text-[#454545] leading-[180%] pt-8 lg:pt-12 xl:pt-20'>
                            Egestas molestie dictum fringilla nulla in et. Rhoncus donec nunc sed congue egestas tellus. Consequat ultrices tincidunt tincidunt convallis libero gravida. Etiam magnis faucibus tincidunt risus nisi. Montes amet sit suspendisse venenatis adipiscing interdum nunc. At pulvinar adipiscing maecenas bibendum adipiscing rutrum nullam. Neque sit proin hac nulla nullam massa condimentum tristique risus. Feugiat faucibus sollicitudin commodo nunc. In condimentum non ut at odio diam in. 
                        </p>
                    </div>
                </Flex>
                <div className="mt-10 lg:mt-16 xl:mt-0">
                    <Images imgSrc={aboutImg} className="w-full h-auto object-cover rounded-md lg:rounded-none"/>
                </div>
            </Container>
        </div>
        </>
    )
}

export default About