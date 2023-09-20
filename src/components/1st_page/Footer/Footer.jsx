import logo from "../../../assets/logo.png"

const Footer = () => {
    return (
        <section className=" b-0 bg-blue-950 flex flex-col justify-center gap-10 p-[6rem] max-[600px]:p-10">
            <img className="w-[20rem]" src={logo} ></img>
            <div className="flex gap-10 justify-between text-gray-300 items-center">
                <div className="w-[400px] text-xl max-[600px]:hidden">We believe in promoting innovative
                    startups, a multifaceted platform
                    allowing user to review the
                    startups and get insight about
                    creative discipline for a
                    variety of projects. Opinions
                    supported by facts and
                    observations will to build a market.</div>
                <div className="flex flex-col gap-10">
                    <div>
                        <h1 className="text-2xl max-[600px]:text-[15px] font-black">Startups Partners</h1>
                        <p className="max-[600px]:text-[12px]">Our Partners</p>
                    </div>
                    <div>
                        <h1 className="text-2xl max-[600px]:text-[15px] font-black">Company</h1>
                        <ul>
                            <li className="max-[600px]:text-[12px]">About</li>
                            <li className="max-[600px]:text-[12px]">Service</li>
                            <li className="max-[600px]:text-[12px]">News</li>
                            <li className="max-[600px]:text-[12px]">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div>
                        <h1 className="text-2xl max-[600px]:text-[15px] font-black">Startups Partners</h1>
                        <p className="max-[600px]:text-[12px]">Our Partners</p>
                    </div>
                    <div>
                        <h1 className="text-2xl max-[600px]:text-[15px] font-black">Company</h1>
                        <ul>
                            <li className="max-[600px]:text-[12px]">About</li>
                            <li className="max-[600px]:text-[12px]">Service</li>
                            <li className="max-[600px]:text-[12px]">News</li>
                            <li className="max-[600px]:text-[12px]">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-500 h-[1px]"></div>
            <div className="text-center">@ StartupSaathii Private Limited. All Rights Reserved.</div>
        </section>
    )
}

export default Footer