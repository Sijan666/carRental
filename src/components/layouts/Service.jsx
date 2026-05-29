import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Images from '../Images'
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.png'

const Service = () => {
    return (
        <>
            <div className="py-10 md:py-16 lg:py-25">
                <div className="bg-[url('/src/assets/serviceBg.png')] bg-no-repeat bg-cover bg-center h-auto lg:h-165 py-10 lg:py-0">
                    <Container className={'px-4 lg:px-0'}>
                        <Flex className="items-start flex-col lg:flex-row gap-8 lg:gap-4 px-4 sm:px-6 lg:px-0">
                            <div className="hidden lg:block lg:w-[57%]">
                            </div>
                            {/* Right Content */}
                            <div className="flex-1 w-full">
                                <h3 className='text-[#181818] text-[28px] md:text-[36px] lg:text-[48px] font-semibold w-full max-w-full lg:max-w-150 pb-8 lg:pb-12 leading-tight text-center lg:text-left'>
                                    Explore Our Wide Range of Car Rental Services
                                </h3>
                                <div className="h-auto lg:h-165 w-full">
                                    <Accordion type="single" collapsible>
                                        {/* Item 1 */}
                                        <AccordionItem value="item-1" className="border-none">
                                            <AccordionTrigger className="hover:no-underline">
                                                <Flex className="items-center gap-x-4 lg:gap-x-7">
                                                    <div className="w-10 md:w-auto shrink-0">
                                                        <Images imgSrc={s1} />
                                                    </div>
                                                    <h4 className='text-[#181818] font-semibold text-[22px] md:text-[28px] lg:text-[36px] text-left'>Car Rental</h4>
                                                </Flex>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-balance">
                                                <p className='w-full max-w-full lg:max-w-180 text-gray-600 text-sm md:text-base'>
                                                    Make sure to provide clear and detailed information about the types of vehicles you offer, rental rates, rental periods, and any additional fees or requirements.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                        {/* Item 2 */}
                                        <AccordionItem value="item-2" className="pt-5 md:pt-7.5 border-none">
                                            <AccordionTrigger className="hover:no-underline">
                                                <Flex className="items-center gap-x-4 lg:gap-x-7">
                                                    <div className="w-10 md:w-auto shrink-0">
                                                        <Images imgSrc={s2} />
                                                    </div>
                                                    <h4 className='text-[#181818] font-semibold text-[22px] md:text-[28px] lg:text-[36px] text-left'>Airport Transfers</h4>
                                                </Flex>
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <p className='w-full max-w-full lg:max-w-180 text-gray-600 text-sm md:text-base'>
                                                    Reliable airport transfer services ensuring you reach your destination on time and with comfort.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                        {/* Item 3 */}
                                        <AccordionItem value="item-3" className="pt-5 md:pt-7.5 border-none">
                                            <AccordionTrigger className="hover:no-underline">
                                                <Flex className="items-center gap-x-4 lg:gap-x-7">
                                                    <div className="w-10 md:w-auto shrink-0">
                                                        <Images imgSrc={s3} />
                                                    </div>
                                                    <h4 className='text-[#181818] font-semibold text-[22px] md:text-[28px] lg:text-[36px] text-left'>Car Maintenance and Repair</h4>
                                                </Flex>
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <p className='w-full max-w-full lg:max-w-180 text-gray-600 text-sm md:text-base'>
                                                    To keep your rental cars in top condition, you'll need to provide regular maintenance and repair services.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                        {/* Item 4 */}
                                        <AccordionItem value="item-4" className="pt-5 md:pt-7.5 border-none">
                                            <AccordionTrigger className="hover:no-underline">
                                                <Flex className="items-center gap-x-4 lg:gap-x-7">
                                                    <div className="w-10 md:w-auto shrink-0">
                                                        <Images imgSrc={s4} />
                                                    </div>
                                                    <h4 className='text-[#181818] font-semibold text-[22px] md:text-[28px] lg:text-[36px] text-left'>Roadside Assistance</h4>
                                                </Flex>
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <p className='w-full max-w-full lg:max-w-180 text-gray-600 text-sm md:text-base'>
                                                    24/7 roadside assistance to ensure peace of mind during your rental period.
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </Flex>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Service