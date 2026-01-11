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
        <div className="py-25 bg-[#181818]">
            <div className="py-37.5">
                <Container className={'border-b border-[#838383] pb-25'}>
                    <Flex className={'items-start justify-between'}>
                        <div className="logo">
                            <Images imgSrc={footerLogo}/>
                            <p className='py-12.5 text-base w-88.75 text-[#838383]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
                            <div className="socialIcons ">
                                <div className="flex items-center gap-x-5">
                                    {/* using UIVerse ui */}
                                    <button href="/" class="cursor-pointer group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#EA002D] text-white font-semibold hover:rounded-[50%] transition-all duration-500">
                                    <BsTwitter/>
                                    <span class="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">Twitter</span>
                                    </button>
                                    <button href="/" class="cursor-pointer group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#EA002D] text-white font-semibold hover:rounded-[50%] transition-all duration-500">
                                    <FaLinkedinIn />
                                    <span class="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">Linkedin</span>
                                    </button>
                                    <button href="/" class="cursor-pointer group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#EA002D] text-white font-semibold hover:rounded-[50%] transition-all duration-500">
                                    <RiInstagramFill   />
                                    <span class="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">Instagram</span>
                                    </button>
                                    <button href="/" class="cursor-pointer group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#EA002D] text-white font-semibold hover:rounded-[50%] transition-all duration-500">
                                    <FaFacebook  />
                                    <span class="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">Facebook</span>
                                    </button>
                                    {/* using UIVerse ui */}
                                </div>
                            </div>
                        </div>
                        <div className="company">
                            <h4 className='pb-11.25 text-[#FDFDFD] font-semibold text-[32px]'>Company</h4>
                            <ul>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>About Us</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Features</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Fleets</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Service</li>
                            </ul>
                        </div>
                        <div className="Service">
                            <h4 className='pb-11.25 text-[#FDFDFD] font-semibold text-[32px]'>Service</h4>
                            <ul>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Car Rental</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Airport Transfer</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Car Maintenance</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Roadside Assistance</li>
                            </ul>
                        </div>
                        <div className="Resource">
                            <h4 className='pb-11.25 text-[#FDFDFD] font-semibold text-[32px]'>Resource</h4>
                            <ul>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Blog</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Reference</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>FAQ</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Support</li>
                            </ul>
                        </div>
                        <div className="Information">
                            <h4 className='pb-11.25 text-[#FDFDFD] font-semibold text-[32px]'>Information</h4>
                            <ul>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Promotion</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Career</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>Media</li>
                                <li className='mb-6.25 text-[#838383] font-semibold text-[24px] cursor-pointer'>License</li>
                            </ul>
                        </div>
                    </Flex>
                </Container>
                <Container className={'pt-7.5'}>
                    <Flex className={'justify-between'}>
                        <Flex className={'gap-x-10'}>
                            <p className='text-[#FDFDFD] font-semibold text-[24px]'>Privacy Policy</p>
                            <p className='text-[#FDFDFD] font-semibold text-[24px]'>Terms of Service</p>
                        </Flex>
                        <p className='text-[#FDFDFD] font-semibold text-[24px]'>© 2023 Pathfinderstd - All Rights Reserved</p>
                    </Flex>
                </Container>
            </div>
        </div>
        </>
    )
}

export default Footer