import Que from "./Que"

const FAQ = () => {
    return (
        <section id="7" className="rounded-3xl m-5 bg-gray-200 p-10">
            <div className="text-black">
                <h1 className="text-5xl max-[600px]:text-3xl text-blue-900 font-bold">FAQ's</h1>
                <Que que={"what is StartupSaathii?"} ans={"Startvest is a publically accessible platform that allows the startups to interact with general public that provides an insight to the startups regarding their performance against a number of parameters as per public's view . As a result of joint concern it provides the users an affluent idea about the functioning of business structures in the particular feild of their intrest. "} />
                <div className="h-[1px] bg-gray-400"></div>
                <Que que={"what does StartupSaathii offers? "} ans={""} />
                <div className="h-[1px] bg-gray-400"></div>
                <Que que={"How does StartupSaathii benefits the startup companies ? "} ans={""} />
                <div className="h-[1px] bg-gray-400"></div>
                <Que que={"How does StartupSaathii helps the founders to grow ?  "} ans={""} />
                <div className="h-[1px] bg-gray-400"></div>
                <Que que={"Does StartupSaathii offers a variety in startups? "} ans={""} />
                <div className="h-[1px] bg-gray-400"></div>
                <Que que={"Is there any eligibility criteria for startups to register themselves ? "} ans={""} />
            </div>
        </section>
    )
}

export default FAQ