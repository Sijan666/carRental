import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaCalendarDay, FaMapMarkerAlt, FaSearch } from 'react-icons/fa'

const Searchbar = () => {
    return (
        <>
        <div className="absolute left-0 bottom-5 w-full">
            <Container>
                <div className="w-365 px-7.5 py-12.5 bg-[#FDFDFD] shadow-newTwo">
                    <Flex className={'justify-between gap-x-5'}>
                        <div className="py-7.5 pl-5 pr-25 bg-[#F5F5F5] border border-[#CEC8C8] hover:bg-[#EA002D] group duration-300">
                            <Flex className={'gap-x-5 items-center'}>
                                <FaMapMarkerAlt className='group-hover:text-[#FDFDFD] duration-300'/>
                                <p className='text-[#454545] font-semibold text-[24px] group-hover:text-[#FDFDFD] duration-300'>Your Location</p>
                            </Flex>
                        </div>
                        <div className="py-7.5 pl-5 pr-25 bg-[#F5F5F5] border border-[#CEC8C8] hover:bg-[#EA002D] group duration-300">
                            <Flex className={'gap-x-5 items-center'}>
                                <FaCalendarDay  className='group-hover:text-[#FDFDFD] duration-300'/>
                                <p className='text-[#454545] font-semibold text-[24px] group-hover:text-[#FDFDFD] duration-300'>Pick Up Date</p>
                            </Flex>
                        </div>
                        <div className="py-7.5 pl-5 pr-25 bg-[#F5F5F5] border border-[#CEC8C8] hover:bg-[#EA002D] group duration-300">
                            <Flex className={'gap-x-5 items-center'}>
                                <FaCalendarDay  className='group-hover:text-[#FDFDFD] duration-300'/>
                                <p className='text-[#454545] font-semibold text-[24px] group-hover:text-[#FDFDFD] duration-300'>Return Date</p>
                            </Flex>
                        </div>
                        <div className="py-7.5 pl-5 pr-25 bg-[#F5F5F5] border border-[#CEC8C8] hover:bg-[#EA002D] group duration-300">
                            <Flex className={'gap-x-5 items-center'}>
                                <FaSearch  className='group-hover:text-[#FDFDFD] duration-300'/>
                                <p className='text-[#454545] font-semibold text-[24px] group-hover:text-[#FDFDFD] duration-300'>Search Now</p>
                            </Flex>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
        </>
    )
}

export default Searchbar