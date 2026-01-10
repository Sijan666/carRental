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
<div className="py-25">
        <div className="bg-[url('/src/assets/serviceBg.png')] h-165 bg-no-repeat bg-cover">
        <Container>
            <Flex className="items-start gap-4">
                <div className="w-[57%]">
                </div>
                <div className="flex-1">
                    <h3 className='text-[#181818] text-[48px] font-semibold w-full max-w-150 pb-12 leading-tight'>
                        Explore Our Wide Range of Car Rental Services
                    </h3>
                    <div className="h-165">
                        <Accordion type="" collapsible>
                            <AccordionItem value="item-1" className="border-none">
                                <AccordionTrigger className="hover:no-underline">
                                    <Flex className={'items-center gap-x-7'}>
                                        <Images imgSrc={s1} />
                                        <h4 className='text-[#181818] font-semibold text-[36px]'>Car Rental</h4>
                                    </Flex>
                                </AccordionTrigger>
                                <AccordionContent className="text-balance">
                                    <p className='w-full max-w-180 text-gray-600'>
                                        Make sure to provide clear and detailed information about the types of vehicles you offer, rental rates, rental periods, and any additional fees or requirements.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="pt-7.5 border-none">
                                <AccordionTrigger className="hover:no-underline">
                                    <Flex className={'items-center gap-x-7'}>
                                        <Images imgSrc={s2} />
                                        <h4 className='text-[#181818] font-semibold text-[36px]'>Airport Transfers</h4>
                                    </Flex>
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className='w-full max-w-180 text-gray-600'>
                                        Reliable airport transfer services ensuring you reach your destination on time and with comfort.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="pt-7.5 border-none">
                                <AccordionTrigger className="hover:no-underline">
                                    <Flex className={'items-center gap-x-7'}>
                                        <Images imgSrc={s3} />
                                        <h4 className='text-[#181818] font-semibold text-[36px]'>Car Maintenance and Repair</h4>
                                    </Flex>
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className='w-full max-w-180 text-gray-600'>
                                        To keep your rental cars in top condition, you'll need to provide regular maintenance and repair services.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="pt-7.5 border-none">
                                <AccordionTrigger className="hover:no-underline">
                                    <Flex className={'items-center gap-x-7'}>
                                        <Images imgSrc={s4} />
                                        <h4 className='text-[#181818] font-semibold text-[36px]'>Roadside Assistance</h4>
                                    </Flex>
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p className='w-full max-w-180 text-gray-600'>
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