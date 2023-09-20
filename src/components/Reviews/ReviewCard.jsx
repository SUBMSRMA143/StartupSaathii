import React from 'react'

const ReviewCard = ({ img }) => {
    return (
        <div className='flex flex-col gap-2 text-black rounded-lg shadow-lg px-10 py-5 pt-2'>
            <img src={img} className='' />
            <h1 className="">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.We try our best to fulfill your expectations.We try our best to fulfill your expectations. </h1>
            <div className="flex gap-10 pt-5">
                <div className="h-[20px] w-[80px] rounded-md bg-gray-200"></div>
                <div className="h-[20px] w-[80px] rounded-md bg-gray-200"></div>
                <div className="h-[20px] w-[80px] rounded-md bg-gray-200"></div>
                <div className="h-[20px] w-[80px] rounded-md bg-gray-200"></div>
            </div>
        </div>
    )
}

export default ReviewCard
