import Screen2Image from "../../../assets/aboutUs.jpg"

const Screen2 = () => {
    return (
        <section className="text-black flex max-[400px]:flex-col-reverse w-[80%] m-auto gap-20 max-[400px]:gap-10 py-20 pl-10 max-[400px]:pl-0 max-[400px]:pt-0 max-[400px]:items-center">
            <div className="h-[520px] w-[500px] max-[400px]:w-[300px] max-[400px]:h-[320px] relative">
                <div className="h-[100%] w-[100%] absolute rounded-3xl bg-blue-900 z-[-2]"></div>
                <div className="h-[92%] w-[92%] absolute rounded-bl-2xl bg-white right-0 z-[-1]"></div>
                <img src={Screen2Image} className="h-[90%] w-[90%] object-cover rounded-bl-xl absolute right-0" />
            </div>
            <div className="w-[50%] max-[400px]:w-[100%] max-[400px]:text-center">
                <h1 className="text-4xl max-[400px]:text-2xl leading-[2.7rem] text-orange-950 font-bold">We believe in promoting
                    innovative startups, a
                    multifaceted platform
                    allowing user to review
                    startups and get insight
                    about creative discipline
                    for a variety of projects.
                    Opinions supported by
                    facts and observations
                    will to build a market.</h1>
                <button className="hover:text-blue-950 hover:duration-300 mt-[5px]">
                    <h3>About Us</h3>
                    <div className="r-arrow"></div>
                </button>
            </div>
        </section>
    )
}

export default Screen2