import { useState } from "react"

const Que = ({ que, ans }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="flex flex-col pl-2 my-5 gap-3 ">
            <div className="flex justify-between">
                <h1 className="text-xl font-black">{que}</h1>
                <button className="text-xl max-[600px]:text-[2rem]" onClick={toggleClass}>&#x2304;</button>
            </div>
            <p id="ans" className={`${isActive ? "active" : ""} pl-2 max-[600px]:text-[15px] text-gray-700`}>{ans}</p>
        </div>
    )
}

export default Que