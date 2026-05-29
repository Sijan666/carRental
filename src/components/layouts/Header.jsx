import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container';
import Flex from '../Flex';
import Images from '../Images';
import logo from '../../assets/logo.png';
import Button from '../Button';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "About", path: "/about" },
        { name: "Service", path: "/service" },
        { name: "Blog", path: "/blog" },
        { name: "Fleet", path: "/fleet" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <>
            <div className="fixed w-full top-0 left-0 z-50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-4 md:py-5 transition-all duration-300">
                <Container className="px-4 xl:px-0">
                    <Flex className={'justify-between items-center'}>
                        {/* Logo */}
                        <Link to={'/'} className="z-50">
                            <Images imgSrc={logo} className="w-32 md:w-36 lg:w-40" />
                        </Link>
                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <ul className='flex gap-x-10 xl:gap-x-12 items-center'>
                                {navItems.map((item, index) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <li key={index} className='relative group overflow-hidden py-1'>
                                            <Link 
                                                to={item.path}
                                                className={`text-[16px] font-semibold transition-colors duration-300 ${
                                                    isActive ? "text-[#EA002D]" : "text-[#181818] hover:text-[#EA002D]"
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                            <span 
                                                className={`absolute bottom-0 left-0 h-0.5 bg-[#EA002D] transition-transform duration-300 origin-left ${
                                                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                                } w-full`}
                                            ></span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* Call to Action Button & Mobile Toggle */}
                        <Flex className="items-center gap-x-4 z-50">
                            <Link to={'/contact'} className="hidden sm:block">
                                <Button 
                                    btnText={"Call Us"} 
                                    className={'px-8 py-3 lg:px-10 lg:py-3.5 bg-[#EA002D] border border-[#EA002D] hover:bg-transparent hover:text-[#EA002D] font-semibold text-[15px] text-white duration-300 rounded shadow-md hover:shadow-none'}
                                />
                            </Link>
                            {/* Mobile Hamburger Menu Icon */}
                            <button 
                                className="lg:hidden text-3xl text-[#181818] hover:text-[#EA002D] transition-colors duration-300"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                            </button>
                        </Flex>
                    </Flex>
                </Container>
                {/* Mobile Menu */}
                <div 
                    className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-400 ease-in-out overflow-hidden ${
                        isMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                    <div className="py-6 px-5 flex flex-col gap-y-5">
                        <ul className='flex flex-col gap-y-4'>
                            {navItems.map((item, index) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <li key={index}>
                                        <Link 
                                            to={item.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`block text-[17px] font-semibold transition-colors duration-300 ${
                                                isActive ? "text-[#EA002D]" : "text-[#181818] hover:text-[#EA002D] hover:pl-2"
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link to={'/contact'} className="sm:hidden" onClick={() => setIsMenuOpen(false)}>
                            <Button 
                                btnText={"Call Us"} 
                                className={'w-full py-3.5 bg-[#EA002D] text-white font-semibold text-[16px] rounded shadow-md'}/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;