import { Link } from "react-router-dom"

const Join = () => {
    return (
        <section className="h-[100vh] bg-blue-900 flex flex-col items-center ">
            <Link to={"/"}>
                <h1 className="hover:scale-105 transition duration-700 opacity-90 text-[100px]"><span className="text-blue-500 text-[150px]">S</span>Tarvest</h1>
            </Link>
            <div className="w-[900px] h-[500px] flex gap-[5rem] justify-center mt-[-80px] items-center ">
                <Link to={"/signup-owner"} className="h-[40%] w-[30%] opacity-50 hover:opacity-100 hover:scale-110 transition duration-500 bg-blue-500 rounded-3xl flex justify-center text-2xl items-center">
                    <div>StartUp owner</div>
                </Link>
                <Link to={"/signup-user"} className="h-[40%] w-[30%] opacity-50 hover:opacity-100 hover:scale-110 transition duration-500 bg-orange-500 rounded-3xl flex justify-center text-2xl items-center">
                    <div>General User</div>
                </Link>
            </div>
        </section>
    )
}

export default Join