import unlock from '../images/Unlock3.svg'
import unlockedBlue from '../images/Sedang.svg'
import unlockedred from '../images/Kecil.svg'
import { useNavigate,useLocation } from 'react-router-dom'


const Transisi_1 = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const scoreStage12 = location.state.scoreStage12
    const click = () => {
        console.log(scoreStage12)
        navigate("/Stage_3", {state:{scoreStage12}})
    }
    return(
        <div className='flex justify-center items-center px-2 '>
            <div className='w-[390px]'>
                <div className="relative bg-yellow-50 rounded-3xl justify-center">
                <div className="left-[95px] top-[44px] absolute text-center text-stone-600 text-2xl font-black font-['Inter']">Congratulations!</div>
                <div className="left-[137px] top-[76px] absolute text-center text-[#245931] text-sm font-extrabold font-['Inter']">Level 3 unlocked</div>
                <div className="left-[128px] top-[504px] absolute text-center text-stone-600 text-5xl font-normal font-['Lalezar']">Level 3</div>
                <div className="w-96 h-96 left-[7px] top-[90px] absolute">
                    <img className="w-40 h-40 left-0 top-[26px] absolute " src={unlockedred} />
                    <img className="w-48 h-52 left-[189px] top-0 absolute " src={unlockedBlue} />
                    <img className="w-64 h-60 left-[54px] top-[130px] absolute" src={unlock}/>
                </div>
                <div className=" left-[102px] top-[603px] absolute bg-[#245931] rounded-3xl  justify-center items-center inline-flex">
                    <button className="text-center px-12 pt-2.5 pb-1.5 text-yellow-50 text-2xl font-normal font-['Lalezar']" onClick={click}>continue</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Transisi_1