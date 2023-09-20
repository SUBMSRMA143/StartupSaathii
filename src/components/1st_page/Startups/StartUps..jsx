import Carousel from "react-multi-carousel"

const Screen4 = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 2.5
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
        <section>
            <div className="my-10">
                <h1 className="screen-heading max-[600px]:text-3xl text-black">STARTUP'S</h1>
                <div className="h-[3px] bg-orange-500 w-[9rem] m-auto"></div>
            </div>
            <div className="bg-blue-950 h-[100vh] flex max-[400px]:flex-col items-center">
                <div className="flex flex-col w-[35%] max-[400px]:w-[90%] max-[400px]:items-center m-10 max-[400px]:m-0 leading-8">
                    <h1 className="text-5xl max-[400px]:text-2xl my-10 leading-[3.5rem] max-[400px]:text-center">These are the startups listed with us intending to optimize growth . Access the best as per your interest .</h1>
                    <button className="bg-orange-500 py-2 font-bold rounded-full w-[150px]">Explore Now</button>
                </div>
                <div className="w-[65%] max-[600px]:w-[100%] h-[100%] mt-[70px] max-[400px]:mt-[-120px] flex flex-col gap-7 max-[600px]:gap-0">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        rewind={true}
                        centerMode={false}
                        arrows={false}
                        autoPlaySpeed={2000}
                        showDots={false}
                        shouldResetAutoplay={true}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >

                        <div className="h-[500px] max-[400px]:h-[400px] text-black w-[300px] bg-white flex justify-center items-center">
                            Page1
                        </div>
                        <div className="h-[500px] max-[400px]:h-[400px] text-black w-[300px] bg-white flex justify-center items-center">
                            Page2
                        </div>
                        <div className="h-[500px] max-[400px]:h-[400px] text-black w-[300px] bg-white flex justify-center items-center">
                            Page3
                        </div>
                        <div className="h-[500px] max-[400px]:h-[400px] text-black w-[300px] bg-white flex justify-center items-center">
                            Page4
                        </div>
                        <div className="h-[500px] max-[400px]:h-[400px] text-black w-[300px] bg-white flex justify-center items-center">
                            Page5
                        </div>
                        <div className="h-[500px] max-[400px]:h-[400px] text-black w-[300px] bg-white flex justify-center items-center">
                            Page6
                        </div>

                    </Carousel>
                    <div className="flex gap-5 mb-20 max-[600px]:hidden ml-10">
                        <button className="w-[50px] h-[50px] border-2 text-5xl text-center">&lt;</button>
                        <button className="w-[50px] h-[50px] border-2 text-5xl text-center">&gt;</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Screen4