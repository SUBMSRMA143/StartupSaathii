import { Link } from "react-router-dom"

const Card = ({ image, title, link }) => {

    return (
        <div className="box-s h-[100%] w-[70%] max-[400px]:w-[100%] rounded-3xl max-[400px]:rounded-none relative">
            <Link to={link}>
                <div className="h-[100%]" >
                    <div className="up-gradient h-[100%] absolute w-[100%] rounded-3xl max-[400px]:rounded-none"></div>
                    <img src={image} className="rounded-3xl max-[400px]:rounded-none object-cover w-[100%] h-[100%]" />
                </div>
                <div className="absolute bottom-10 px-5">
                    <h1 className="text-4xl pb-[10px] font-bold">{title}</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, at?</h2>
                </div>
            </Link>
        </div >
    )
}

export default Card