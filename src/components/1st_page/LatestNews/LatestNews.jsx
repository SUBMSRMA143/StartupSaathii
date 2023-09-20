import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'

const LatestNews = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="mt-[-25px] h-[100vh] w-[100%]">
            <div className="flex flex-col mx-[2.5rem] h-[100%]">
                <div className="mt-5 max-[600px]:mt-20 mb-10 max-[600px]:mb-[-100px]">
                    <h1 className="screen-heading max-[600px]:text-3xl text-black">Latest News</h1>
                    <div className="h-[3px] bg-orange-500 w-[9rem] m-auto"></div>
                </div>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    rewind={true}
                    centerMode={false}
                    arrows={false}
                    autoPlaySpeed={2000}
                    // showDots={true}
                    shouldResetAutoplay={true}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="text-black h-[450px] w-[350px] max-[600px]:w-[100%] flex justify-center rounded-3xl items-center bg-blue-300">Item 1</div>
                    <div className="text-black h-[450px] w-[350px] max-[600px]:w-[100%] flex justify-center rounded-3xl items-center bg-blue-300">Item 2</div>
                    <div className="text-black h-[450px] w-[350px] max-[600px]:w-[100%] flex justify-center rounded-3xl items-center bg-blue-300">Item 3</div>
                    <div className="text-black h-[450px] w-[350px] max-[600px]:w-[100%] flex justify-center rounded-3xl items-center bg-blue-300">Item 4</div>
                    <div className="text-black h-[450px] w-[350px] max-[600px]:w-[100%] flex justify-center rounded-3xl items-center bg-blue-300">Item 5</div>
                    <div className="text-black h-[450px] w-[350px] max-[600px]:w-[100%] flex justify-center rounded-3xl items-center bg-blue-300">Item 6</div>
                </Carousel>;
            </div>
        </section >
    )
}

export default LatestNews