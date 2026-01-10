import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import aboutImg from '../../assets/aboutImg.png'

const About = () => {
    return (
        
        <>
        <div className="py-75">
            <Container>
                <h4 className='text-[#454545] font-semibold text-[24px] pb-5'>About Speedy</h4>
                <Flex className={'gap-x-25 items-start'}>
                    <div className="">
                        <h3 className='text-[48px] font-semibold text-[#181818] pb-42 w-152.5'>Discover the Difference with Our Car Rentals</h3>
                        <p className='text-base text-[#454545] w-138.75 leading-[180%]'>Lorem ipsum dolor sit amet consectetur. Malesuada turpis sem pellentesque suscipit sit vel. Id sem elementum adipiscing sed pulvinar quisque. Eu ut sagittis facilisi porttitor posuere eget in lacus. Justo sagittis rhoncus morbi id sed id cras quis. Tempus elementum mauris faucibus felis eleifend placerat. </p>
                    </div>
                    <div className="pb-12.5">
                        <p className='text-base text-[#454545] leading-[180%] '>Lorem ipsum dolor sit amet consectetur. Malesuada turpis sem pellentesque suscipit sit vel. Id sem elementum adipiscing sed pulvinar quisque. Eu ut sagittis facilisi porttitor posuere eget in lacus. Justo sagittis rhoncus morbi id sed id cras quis. Tempus elementum mauris faucibus felis eleifend placerat. Quam sed fusce id molestie amet quis tortor porta lorem. Sed commodo et in congue at in amet vivamus iaculis. Amet in duis eu in non nunc adipiscing egestas. Ultricies morbi at ut nec luctus. Blandit convallis a blandit eget sagittis. Amet varius suspendisse odio molestie. Ullamcorper laoreet dictum semper augue et dui vestibulum imperdiet cum. Laoreet in scelerisque nulla in vulputate malesuada dictumst vitae diam. Volutpat sed arcu urna sem eu ornare et facilisis sed.</p>
                        <p className='text-base text-[#454545] leading-[180%] pt-20'>Egestas molestie dictum fringilla nulla in et. Rhoncus donec nunc sed congue egestas tellus. Consequat ultrices tincidunt tincidunt convallis libero gravida. Etiam magnis faucibus tincidunt risus nisi. Montes amet sit suspendisse venenatis adipiscing interdum nunc. At pulvinar adipiscing maecenas bibendum adipiscing rutrum nullam. Neque sit proin hac nulla nullam massa condimentum tristique risus. Feugiat faucibus sollicitudin commodo nunc. In condimentum non ut at odio diam in. </p>
                    </div>
                </Flex>
                <Images imgSrc={aboutImg}/>
            </Container>
        </div>
        </>
    )
}

export default About