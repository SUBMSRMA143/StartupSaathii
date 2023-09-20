import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"

const NavBar = () => {
    const [color, setColor] = useState(false);

    const toggleColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", toggleColor);
    return (
        <nav className={`${color ? "bg-blue-900" : ""} 
                       Navbar duration-500 flex justify-between py-3 px-[4rem] z-[10] bg-no-repeat object-fill fixed w-[100vw]  max-[500px]:pt-8    
                       `}>
            <Link to={'/'}><img className="w-[10rem] max-[500px]:ml-[3rem]" src={logo} ></img></Link>
            <ul className="flex gap-10 items-center justify-center max-[500px]:hidden">
                <li className='hover:text-blue-500 duration-500'><Link to={"/Write-a-review"}>Write a review</Link></li>
                <li className='hover:text-blue-500 duration-500'><Link to={"/for-startups"}>For Startups</Link></li>
                <li className='hover:text-blue-500 duration-500'><Link to={"/blogs"}>Blogs</Link></li>
                <li className='hover:text-blue-500 duration-500'><a href='#7'>FAQ's</a></li>
                <li className='hover:text-blue-500 duration-500'><Link to={"/join-starvest"}>JOIN</Link></li>
                <li className='hover:text-blue-500 duration-500'><Link to={"/login"}>LOGIN</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar