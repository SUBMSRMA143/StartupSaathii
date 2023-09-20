import { Link } from 'react-router-dom';
import logoLight from "../../assets/logo-light.png"

const ReviewNavbar = () => {
    return (
        <nav className={`Navbar duration-500 flex justify-between py-3 px-[4rem] z-[10] bg-no-repeat object-fill w-[100vw] max-[500px]:pt-8`}>
            <Link to={"/"}><img className="w-[10rem] max-[500px]:ml-[3rem]" src={logoLight} ></img></Link>
            <ul className="flex gap-10 items-center justify-center max-[500px]:hidden">
                <li className='hover:text-blue-500 text-black duration-500'><Link to={"/"}>Home</Link></li>
                <li className='hover:text-blue-500 text-black duration-500'><Link to={"/blogs"}>Blogs</Link></li>
                <li className='hover:text-blue-500 text-black duration-500'><Link to={"/FAQ's"}>FAQ's</Link></li>
                <li className='h-[50px] w-[50px] bg-gray-200 rounded-[50%] duration-500'><Link to={"/FAQ's"}></Link></li>
            </ul>
        </nav>
    )
}

export default ReviewNavbar