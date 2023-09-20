import heroImage from "../../../assets/heroImage.png"

const Screen1 = () => {

    return (
        <section id="1" className="h-[100vh] relative pt-[7rem] max-[400px]:pt-[6rem]">
            <div className="heroBgImage h-[100vh] w-[100vw] bg-contain no-repeat z-[-1] absolute top-0 left-0" />
            <div className="absolute">
                <main className="flex justify-between items-center py-5 px-20 max-[400px]:px-10 max-[400px]:flex-col max-[400px]:gap-10">
                    <div className="flex flex-col items-start max-[400px]:items-center gap-7 leading-8 ">
                        <h1 className="font-extrabold text-6xl max-[400px]:text-4xl w-[35rem] max-[400px]:w-[20rem] max-[400px]:text-center">Discover What's Possible</h1>
                        <h2 className="w-[50%] max-[400px]:w-[75%] pl-[5px] max-[400px]:text-center">Join now to bring good startups
                            to life, Experience the magic of
                            innovative startups.</h2>
                        <a className="bg-blue-500 px-10 py-2 rounded-full" href="#3">Explore Now</a>
                    </div>
                    <div>
                        <img className="h-[400px] max-[400px]:h-[250px] scale-110" src={heroImage} />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Screen1