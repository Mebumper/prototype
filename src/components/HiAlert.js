import { useLocation, useNavigate } from "react-router-dom";
import Hi from "../images/Hi.svg"

const HiAlert = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <img src={Hi} alt="Hi" className="absolute mb-[350px]" />
            <div className="uppercase text-stone-600 font-['Lalezar'] text-3xl mb-[50px] absolute">
                <p>HI, {location.state.Value}</p>
            </div>
                <div className="relative w-72 text-center mt-3">
                    <p className="text-stone-600 font-['Lalezar']">Ready to unlock the secrets of female mind</p>
                </div>
                <div className="absolute mt-20 font-['Lalezar'] text-white bg-stone-700 w-28 h-7 shadow text-center rounded-xl py-1">
                    <button onClick={() => navigate("/Stage_1")}>LET’S START</button>
                </div>
            </div>

    )   
}
export default HiAlert