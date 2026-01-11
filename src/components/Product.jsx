import React from 'react'
import Images from './Images'
import Button from './Button'
import { HiMapPin } from 'react-icons/hi2'
import { FaPhoneAlt } from 'react-icons/fa'

const Product = ({productImg , productPrice , productRatings , productLocation , productBtn , productModel , priceCurrency , productTime}) => {
    return (
        <>
        <div className="overflow-hidden">
            <Images imgSrc={productImg} className={'w-full'}/>
            <div className="pt-10 flex justify-between items-center">
                <div className="flex items-baseline">
                    <p className='text-[#EA002D] font-semibold text-[24px]'>{priceCurrency}</p>
                    <h4 className="text-[#000000] font-semibold text-[48px]">{productPrice}</h4>
                    <p className='text-[#454545] font-semibold text-[24px]'>{productTime}</p>
                </div>
                <Images imgSrc={productRatings}/>
            </div>
                <h4 className='mt-5 mb-13.75 pb-6.25 flex items-center gap-x-3.75 text-[#454545] font-semibold text-[24px] border-b border-[#DFDFDF]'><HiMapPin />{productLocation}</h4>
                <h4 className='pb-7.5 text-[#181818] font-semibold text-[32px] text-left'>{productModel}</h4>
                <h4 className=' py-7.5 flex items-center gap-x-3.75 text-[#FDFDFD] font-semibold text-[24px] bg-[#EA002D] justify-center cursor-pointer'><FaPhoneAlt />{productBtn}</h4>
        </div>
        </>
    )
}

export default Product