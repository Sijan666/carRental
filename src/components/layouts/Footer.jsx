import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import footerLogo from '../../assets/footerLogo.png'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <>
        <div className="py-10 md:py-25 bg-[#181818]">
            <div className="py-10 md:py-37.5">
                <Container className={'border-b border-[#838383] pb-10 md:pb-25 px-4 lg:px-0'}>
                    <Flex className={'flex-col lg:flex-row items-center lg:items-start justify-between gap-y-12 lg:gap-y-0 text-center lg:text-left'}>
                        <div className="logo flex flex-col items-center lg:items-start w-full lg:w-auto">
                            <Images imgSrc={footerLogo} className="w-32 md:w-auto"/>
                            <p className='py-6 md:py-12.5 text-sm md:text-base w-full max-w-sm lg:w-88.75 text-[#838383]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna
                            </p>
                            <div className="socialIcons ">
                                <div className="flex items-center justify-center lg:justify-start gap-x-3 md:gap-x-5">
                                    {/* using UIVerse ui */}
                                    <button href="/" className="cursor-pointer group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#EA002D] text-white font-semibold hover:rounded-[50%] transition-all duration-500">
                                    <BsTwitter/>
                                    <span className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">Twitter</span>
                                    </button>
                                    <button href="/" className="cursor-pointer group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#EA002D] text-white font-semibold hover:rounded-[50%] transition-all duration-500">
                                    <FaLinkedinIn />
                                    <span className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">Linkedin</span>
                                    </button>
                                    <button href="/" className="cursor-pointer group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#EA002D] text-white font-semibold hover:rounded-[50%] transition-all duration-500">
                                    <RiInstagramFill   />
                                    <span className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">Instagram</span>
                                    </button>
                                    <button href="/" className="cursor-pointer group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#EA002D] text-white font-semibold hover:rounded-[50%] transition-all duration-500">
                                    <FaFacebook  />
                                    <span className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">Facebook</span>
                                    </button>
                                    {/* using UIVerse ui */}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-between w-full lg:w-auto gap-10 md:gap-16 lg:gap-24">
                            <div className="company">
                                <h4 className='pb-6 md:pb-11.25 text-[#FDFDFD] font-semibold text-xl md:text-[32px]'>Company</h4>
                                <ul>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>About Us</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Features</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Fleets</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Service</li>
                                </ul>
                            </div>
                            <div className="Service">
                                <h4 className='pb-6 md:pb-11.25 text-[#FDFDFD] font-semibold text-xl md:text-[32px]'>Service</h4>
                                <ul>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Car Rental</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Airport Transfer</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Car Maintenance</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Roadside Assistance</li>
                                </ul>
                            </div>
                            <div className="Resource">
                                <h4 className='pb-6 md:pb-11.25 text-[#FDFDFD] font-semibold text-xl md:text-[32px]'>Resource</h4>
                                <ul>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Blog</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Reference</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>FAQ</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Support</li>
                                </ul>
                            </div>
                            <div className="Information">
                                <h4 className='pb-6 md:pb-11.25 text-[#FDFDFD] font-semibold text-xl md:text-[32px]'>Information</h4>
                                <ul>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Promotion</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Career</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>Media</li>
                                    <li className='mb-4 md:mb-6.25 text-[#838383] font-semibold text-base md:text-[24px] cursor-pointer hover:text-white transition-colors duration-300'>License</li>
                                </ul>
                            </div>
                        </div>
                    </Flex>
                </Container>
                <Container className={'pt-6 md:pt-7.5 px-4 lg:px-0'}>
                    <Flex className={'flex-col md:flex-row justify-between items-center text-center md:text-left gap-y-4 md:gap-y-0'}>
                        <Flex className={'gap-x-4 md:gap-x-10'}>
                            <p className='text-[#FDFDFD] font-semibold text-sm md:text-[24px] cursor-pointer hover:text-[#EA002D] transition-colors duration-300'>Privacy Policy</p>
                            <p className='text-[#FDFDFD] font-semibold text-sm md:text-[24px] cursor-pointer hover:text-[#EA002D] transition-colors duration-300'>Terms of Service</p>
                        </Flex>
                        <p className='text-[#FDFDFD] font-semibold text-sm md:text-[24px]'>© 2023 Pathfinderstd - All Rights Reserved</p>
                    </Flex>
                </Container>
            </div>
        </div>
        </>
    )
}

export default Footer