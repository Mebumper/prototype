
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../images/Logo.svg';

function InputUsername() {
    const [Value, SetValue] = useState("");
    const navigate = useNavigate();
    const click = () => {
        navigate("./Welcome", {state:{Value}})
    }
    const onChange = event => {
        SetValue(event.target.value)
    }
    return (
        <div className=" h-screen w-screen flex justify-center items-center">
            <div className="absolute mb-[350px]">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="absolute mb-[100px] text-center text-stone-600 mt-[100px]">
                <p className="font-['lalezar']">Let’s see how good you are at understanding women</p>
            </div>
            <div className="relative mt-[100px]">
                <input
                id="inputUsername" 
                type="text"
                placeholder="Username"
                onChange={onChange}
                value={Value}
                className=" w-72 h-12 bg-stone-700 px-5 py-1 rounded-xl text-white text-opacity-70 text-md"
                required
                />    
                    <div
                        className="text-center py-[1px] w-20 h-7 absolute top-[10px] right-3 bg-white rounded-xl" 
                    >
                        <button
                            onClick={click}
                            className="text-stone-700 font-['Lalezar']"
                        >
                            START
                        </button>
                    </div>
            </div>
        </div>
    );
}
export default InputUsername