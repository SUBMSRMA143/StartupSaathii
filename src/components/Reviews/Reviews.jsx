import React from 'react'
import ReviewNavbar from './ReviewNavbar'
import reviewlandingImage from "../../assets/ReviewslandingImage.png"
import ReviewCard from './ReviewCard'
import img_top from './img_top.png'
import img_top_2 from './img_top_2.png'
// import FontAwesomeIcon

const Reviews = () => {
    return (
        <div className='flex flex-col'>
            <ReviewNavbar />
            <hr></hr>
            <img src={reviewlandingImage} />
            <div className='flex flex-col w-[100%] p-10 items-center'>
                <div className='w-[100%] flex justify-between items-center'>
                    <div className='w-[200px] h-[50px] border-2 border-black text-black flex justify-center text-xl cursor-pointer items-center'>FILTER</div>
                    <h3 className='text-xl text-gray-500'>1000+ Results</h3>
                </div>
                <div className='p-5 flex flex-col gap-10'>
                    <ReviewCard img={img_top} />
                    <ReviewCard img={img_top_2} />
                    <ReviewCard img={img_top} />
                    <ReviewCard img={img_top_2} />
                </div>
                <div class="loader"></div>
            </div>
        </div>
    )
}

export default Reviews
