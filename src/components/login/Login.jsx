import { Link } from "react-router-dom"

const Login = () => {
    return (
        <section className="h-[100vh] bg-blue-900 relative">
            <h1 className="opacity-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] text-[270px]"><span className="text-blue-500 text-[450px]">S</span>Tarvest</h1>
            <div className="h-[80%] w-[50%] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-30 rounded-3xl"></div>
            <div className="h-[76%] w-[48%] flex flex-col gap-5 p-10 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h1 className="text-4xl mt-7 mb-10"><span className="text-blue-300">LOGIN</span> Form</h1>
                <input type="text" placeholder="UserName" className="text-black bg-white rounded-xl w-[55%] px-2 py-4"></input>
                <input type="password" placeholder="Password" className="text-black bg-white rounded-xl w-[55%] px-2 py-4 mb-5"></input>
                <div className="flex gap-10">
                    <button className="px-5 py-2 bg-black opacity-40 rounded-xl">LOGIN</button>
                    <Link to={"/join-starvest"}>
                        <button className="px-5 py-2 bg-orange-500 rounded-xl">SignUp</button>
                    </Link>
                </div>
                <Link to={"/"}>
                    <button className="mt-5 hover:text-blue-300 trasition duration-400">Go to HOME page</button>
                    <hr></hr>
                </Link>
            </div>
        </section>
    )
}

export default Login