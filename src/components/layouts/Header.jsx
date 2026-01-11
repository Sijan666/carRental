import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import logo from '../../assets/logo.png'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <div className="py-12.5 fixed w-full top-0 left-0 z-1">
            <Container>
                <Flex className={'justify-between'}>
                    <Link to={'/'}>
                        <Images imgSrc={logo}/>
                    </Link>
                    <div className="">
                        <ul className='flex gap-x-20'>
                            <li className='text-[#181818] font-semibold text-[24px]'>About</li>
                            <li className='text-[#181818] font-semibold text-[24px]'>Service</li>
                            <li className='text-[#181818] font-semibold text-[24px]'>Blog</li>
                            <li className='text-[#181818] font-semibold text-[24px]'>Fleet</li>
                            <li className='text-[#181818] font-semibold text-[24px]'>
                                <Link to={'/contact'}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={'/contact'}>
                        <Button btnText={"Call Us"} className={'px-15 py-5 bg-[#EA002D] hover:bg-[#FDFDFD] hover:text-[#EA002D] font-semibold text-base text-white duration-300 '}/>
                    </Link>
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default Header