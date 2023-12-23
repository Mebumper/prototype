import unlock from '../images/Unlock3.svg'
import unlockedBlue from '../images/Sedang.svg'
import unlockedred from '../images/Kecil.svg'
import { useLocation } from 'react-router-dom'
import Confetti from 'react-confetti'
import Above8 from '../images/ABOVE8.png'
import Less8 from '../images/LESS8.png'
import { useState, useEffect } from 'react'

const Finished = () => {

    const location = useLocation();
    const scoreStage123 = location.state.scoreStage123
    const [result, setResult] = useState()
    
    useEffect(() => {
        console.log(scoreStage123)
        if(scoreStage123 >= 8){
            setResult(Above8)
        } else {
            setResult(Less8)
        }
      }, [scoreStage123])

    return(
        <div className='flex justify-center items-center px-2 '>
            <Confetti 
            numberOfPieces={100}
            gravity={0.05}
            />
            <div className='w-[390px]'>
                <div className="relative bg-yellow-50 rounded-3xl justify-center">
                <div className="left-[124px] top-[40px] absolute text-center text-stone-600 text-2xl font-black font-['Inter']">Well Done!</div>
                <div className="left-[99px] top-[75px] absolute text-center text-stone-600 text-sm font-extrabold font-['Inter']">You have cleared all stages.</div>       
                <div className="left-[102px] top-[504px] absolute text-center text-stone-600 text-2xl font-normal font-['Lalezar']">Game is complete!</div>
                <div className="left-[112px] top-[540px] absolute text-center text-stone-600 text-xs font-bold font-['Inter']">click FINISH button to<br/>download your result card</div>
                <div className="left-[95px] top-[688px] absolute text-center text-neutral-400 text-xs font-bold font-['Inter']">See you next time. Happy holidays!</div>
                <div className="w-96 h-96 left-[7px] top-[90px] absolute">
                    <img className="w-40 h-40 left-0 top-[26px] absolute " src={unlockedred} />
                    <img className="w-48 h-52 left-[189px] top-0 absolute " src={unlockedBlue} />
                    <img className="w-64 h-60 left-[54px] top-[130px] absolute" src={unlock}/>
                </div>
                <div className=" left-[112px] top-[603px] absolute bg-[#5F5B50] rounded-3xl  justify-center items-center inline-flex">
                    <a target='_blank' rel="noreferrer" download="Result" href={result} className="text-center px-12 pt-2.5 pb-1.5 text-yellow-50 text-2xl font-normal font-['Lalezar']">FINISH</a>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Finished