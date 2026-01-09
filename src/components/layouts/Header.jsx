import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import logo from '../../assets/logo.png'
import Button from '../Button'

const Header = () => {
    return (
        <>
        <div className="py-12.5 fixed w-full top-0 left-0 z-1">
            <Container>
                <Flex className={'justify-between'}>
                    <Images imgSrc={logo}/>
                    <div className="">
                        <ul className='flex gap-x-20'>
                            <li className='text-[#181818] font-semibold'>About</li>
                            <li className='text-[#181818] font-semibold'>Service</li>
                            <li className='text-[#181818] font-semibold'>Blog</li>
                            <li className='text-[#181818] font-semibold'>Fleet</li>
                            <li className='text-[#181818] font-semibold'>Contact</li>
                        </ul>
                    </div>
                    <Button btnText={"Call Us"} className={'px-15 py-2.5 bg-[#EA002D] hover:bg-[#FDFDFD] hover:text-[#EA002D] font-semibold text-base text-white duration-300 '}/>
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default Header