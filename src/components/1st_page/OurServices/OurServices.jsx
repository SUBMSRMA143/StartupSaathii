import service1 from "../../../assets/Reviews.jpg"
import service2 from "../../../assets/Roadmap.jpg"
import service3 from "../../../assets/Blogs.jpg"
import Card from "../../card/Card"

const OurServices = () => {
    return (
        <section id="3" className="max-[400px]:h-[840px] bg-blue-950">
            <div className="w-[90%] max-[400px]:w-[100%] flex flex-col item-center justify-center m-auto">
                <div className="my-10">
                    <h1 className="screen-heading max-[400px]:text-3xl">OUR SERVICES</h1>
                    <div className="h-[3px] bg-orange-500 w-[9rem] m-auto"></div>
                </div>
                <div className="flex max-[400px]:flex-col max-[400px]:gap-0 gap-10 mb-10 h-[490px]">
                    <Card image={service1} title={"Review"} link={"reviews"} />
                    <Card image={service2} title={"Roadmap"} link={"roadmap"} />
                    <Card image={service3} title={"Blog"} link={"blogs"} />
                </div>
            </div>
        </section >
    )
}

export default OurServices