import ReactPlayer from "react-player"

const StoryTelling = () => {
    let VIDEO_URL = "https://youtu.be/Uwk86DUPywI";

    return (
        <section className="flex flex-col items-center h-[100vh] max-[600px]:h-[40vh]">
            <div className="my-5">
                <h1 className="screen-heading max-[600px]:text-3xl text-black">STORY TELLING</h1>
                <div className="h-[3px] bg-orange-500 w-[9rem] m-auto"></div>
            </div>
            <div className="relative h-[75%] w-[80%] max-[600px]:h-[100%] max-[600px]:w-[90%] rounded">
                <ReactPlayer
                    url={VIDEO_URL}
                    controls
                    height={"100%"}
                    width={"100%"}
                    className='player'
                />
            </div>
        </section>
    )
}

export default StoryTelling