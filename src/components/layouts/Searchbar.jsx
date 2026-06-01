import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaCalendarDay, FaMapMarkerAlt, FaSearch } from 'react-icons/fa'

const Searchbar = () => {
    return (
        <>
        {/* <div className="lg:absolute left-0 lg:bottom-5 w-full mt-10 lg:mt-0 z-10">
            <Container className={'px-4 lg:px-0'}>
                <div className="w-full px-5 py-8 md:px-7.5 md:py-12.5 bg-[#FDFDFD] shadow-newTwo rounded-md lg:rounded-none">
                    <Flex className={'flex-col lg:flex-row justify-between gap-y-4 lg:gap-y-0 lg:gap-x-5'}>
                        <div className="w-full lg:w-1/4 py-5 md:py-7.5 pl-4 md:pl-5 pr-4 lg:pr-10 xl:pr-25 bg-[#F5F5F5] border border-[#CEC8C8] hover:bg-[#EA002D] group duration-300 cursor-pointer rounded-md lg:rounded-none">
                            <Flex className={'gap-x-4 md:gap-x-5 items-center justify-center lg:justify-start'}>
                                <FaMapMarkerAlt className='text-lg group-hover:text-[#FDFDFD] duration-300'/>
                                <p className='text-[#454545] font-semibold text-[18px] xl:text-[24px] group-hover:text-[#FDFDFD] duration-300 whitespace-nowrap'>Your Location</p>
                            </Flex>
                        </div>
                        <div className="w-full lg:w-1/4 py-5 md:py-7.5 pl-4 md:pl-5 pr-4 lg:pr-10 xl:pr-25 bg-[#F5F5F5] border border-[#CEC8C8] hover:bg-[#EA002D] group duration-300 cursor-pointer rounded-md lg:rounded-none">
                            <Flex className={'gap-x-4 md:gap-x-5 items-center justify-center lg:justify-start'}>
                                <FaCalendarDay  className='text-lg group-hover:text-[#FDFDFD] duration-300'/>
                                <p className='text-[#454545] font-semibold text-[18px] xl:text-[24px] group-hover:text-[#FDFDFD] duration-300 whitespace-nowrap'>Pick Up Date</p>
                            </Flex>
                        </div>
                        <div className="w-full lg:w-1/4 py-5 md:py-7.5 pl-4 md:pl-5 pr-4 lg:pr-10 xl:pr-25 bg-[#F5F5F5] border border-[#CEC8C8] hover:bg-[#EA002D] group duration-300 cursor-pointer rounded-md lg:rounded-none">
                            <Flex className={'gap-x-4 md:gap-x-5 items-center justify-center lg:justify-start'}>
                                <FaCalendarDay  className='text-lg group-hover:text-[#FDFDFD] duration-300'/>
                                <p className='text-[#454545] font-semibold text-[18px] xl:text-[24px] group-hover:text-[#FDFDFD] duration-300 whitespace-nowrap'>Return Date</p>
                            </Flex>
                        </div>
                        <div className="w-full lg:w-1/4 py-5 md:py-7.5 pl-4 md:pl-5 pr-4 lg:pr-10 xl:pr-25 bg-[#F5F5F5] border border-[#CEC8C8] hover:bg-[#EA002D] group duration-300 cursor-pointer rounded-md lg:rounded-none">
                            <Flex className={'gap-x-4 md:gap-x-5 items-center justify-center lg:justify-start'}>
                                <FaSearch  className='text-lg group-hover:text-[#FDFDFD] duration-300'/>
                                <p className='text-[#454545] font-semibold text-[18px] xl:text-[24px] group-hover:text-[#FDFDFD] duration-300 whitespace-nowrap'>Search Now</p>
                            </Flex>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div> */}
        </>
    )
}

export default Searchbar