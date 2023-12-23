import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DroppableArea from './DroppableArea';
import quizData from './quizData.json';
import { useNavigate, useLocation } from 'react-router-dom';
import Stage3_1 from '../images/Stage3_1.svg';
import Stage3_2 from '../images/Stage3_2.svg';
import Stage3_3 from '../images/Stage3_3.svg';
import Stage3_4 from '../images/Stage3_4.svg';
import Stage3_5 from '../images/Stage3_5.svg';
import three01 from '../images/prog/three01.svg'
import three02 from '../images/prog/three02.svg'
import three03 from '../images/prog/three03.svg'
import three04 from '../images/prog/three04.svg'
import three05 from '../images/prog/three05.svg'
import Correct from '../images/Correct.svg'
import Incorrect from '../images/Incorrect.svg'

const Stage3 = () => {
    const [questions, setQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scoreStage3, setScoreStage3] = useState(0);
    const [scoreStage123, setScoreStage123] = useState();
    const [proggres, setProggres] = useState(three01)
    const [alert, setAlert] = useState(Incorrect)
    const [image, setImage] = useState(Stage3_1)
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState();
    const [color, setColor] = useState();
    const navigate = useNavigate();
    const location = useLocation()
    const scoreStage12 = Number(location.state.scoreStage12);

  
    useEffect(() => {
      // Fetch and set the questions from the imported JSON file
      setQuestions(quizData.questions2);
      // Set the initial options based on the first question
      setOptions(quizData.questions2[0].options);
    }, []);

    useEffect(() => {
      setScoreStage123(scoreStage12 + scoreStage3);
      console.log(scoreStage123);
    }, [scoreStage3])

    useEffect(() => {
      if (currentQuestionIndex === 1) {
        setProggres(three02)
        setImage(Stage3_2)
        } else if(currentQuestionIndex === 2) {
          setProggres(three03)
          setImage(Stage3_3)
        } else if(currentQuestionIndex === 3) {
          setProggres(three04)
          setImage(Stage3_4)
        }else if(currentQuestionIndex === 4) {
        setProggres(three05)
        setImage(Stage3_5)
        }
      }, [currentQuestionIndex])
  
    const onDragEnd = (result) => {
      const { source, destination } = result;
    
      if (!destination) return;
    
      const draggedItemId = result.draggableId;
    
      if (source.droppableId === destination.droppableId) {
        // Reorder the items within the same droppable area
        if (source.droppableId === 'droppable-options') {
          const updatedOptions = Array.from(options);
          const [removed] = updatedOptions.splice(source.index, 1);
          updatedOptions.splice(destination.index, 0, removed);
          setOptions(updatedOptions);
        }
        return;
      }
    
      // Handle moving items between answer and options
    
      if (source.droppableId === 'droppable-options' && destination.droppableId === 'droppable-answer') {
        const draggedItem = options.find((item) => item.id === draggedItemId);
        setOptions((prevOptions) => prevOptions.filter((item) => item.id !== draggedItemId));
    
        if (answers.length === 0) {
          setAnswers([draggedItem]);
        } else {
          const replacedItem = answers[0];
          setOptions((prevOptions) => [...prevOptions, replacedItem]);
          setAnswers([draggedItem]);
        }
      }
    
      if (source.droppableId === 'droppable-answer' && destination.droppableId === 'droppable-options') {
        const draggedItem = answers.find((item) => item.id === draggedItemId);
        setAnswers([]);
        setOptions((prevOptions) => {
          const newOptions = [...prevOptions];
          newOptions.splice(destination.index, 0, draggedItem);
          return newOptions;
        });
      }
    
      if (source.droppableId === 'droppable-answer' && destination.droppableId === 'droppable-answer') {
        const draggedItem = answers.find((item) => item.id === draggedItemId);
        setAnswers([draggedItem]);
      }
    };

    const nextStage = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setOptions(questions[currentQuestionIndex + 1].options); // Set options for the next question
        setAnswers([]); // Clear previous answers
      } else {
        navigate("/Finished", {state:{scoreStage123}})
      }
    }
    const verifyAnswerAndMoveToNext = () => {
      
      if (answers.length > 0) {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedAnswerId = answers[0].id; 
        
        if (currentQuestion.correctAnswerId === selectedAnswerId) { 
          setScoreStage3(prevScore => prevScore + 1);
          setAlert(Correct)
          setText("ikan hiu makan badak i love you mendadak")
          setColor("#B9DEBD")

        } else {
          setAlert(Incorrect)
          setText("Dih Payah!!!")
          setColor("#F19C9C")
        }
        } else {
      }
    };

     

  return (
    <div className=" flex justify-center items-center px-2 mt-11">
      <DragDropContext onDragEnd={onDragEnd} >
        <div className='pt-[30px] '>
          <div className="absolute ml-[27px] mt-[-40px] w-[330px]">
            <img src={proggres} alt='1of5'/>
          </div>  
          <div className='flex justify-center items-center'>
            <img src={image} alt="Ilustrasi ekspresi"/>
            <div>
              <div className='mb-1 w-fit max-w-[187px] bg-[#c2b29b] font-semibold  text-stone-600 text-xs font-["Inter"] rounded-bl-3xl rounded-r-3xl px-4 py-2'>
                {questions.length > 0 && (
                  <h3>{questions[currentQuestionIndex].content}</h3>
                )}
              </div>
              {questions.length > 0 && questions[currentQuestionIndex].content1 && (
                <h3 className=' bg-[#c2b29b] w-[187px] font-semibold text-stone-600 text-xs font-["Inter"] rounded-[12px] px-4 py-2'>{questions[currentQuestionIndex].content1}</h3>
              )}
            </div>
          </div>
                <div className="px-[21px] py-[11px] w-[390px] h-[77px] bg-[#f1f1f1] rounded-[12px] overflow-hidden border-[3px] border-dashed border-white mb-2" >
                  <div>
                    </div>
                  <DroppableArea droppableId="droppable-answer" items={answers} title="Answer" />
                </div>
                  <div className='flex w-[390px] h-[320px] top-0 left-0 bg-[#c2b29b] rounded-[12px] '>
                    <div className='absolute mt-5 ml-6'>
                      <DroppableArea droppableId="droppable-options" items={options} title="Options" />
                    </div>
                    <div>
                      <button
                        className='text-center font-["lalezar"] text-white py-3 mt-[250px] ml-[23px] w-[344px] h-[42px] bg-[#403d35] rounded-[12px] shadow-[0px_4px_4px_#00000040]'
                        type="button"
                        onClick={() => {verifyAnswerAndMoveToNext(); setShowModal(true)}}
                      >
                        CHECK
                      </button>
                      {showModal ? (
                        <>
                          <div
                            className="left- justify-center items-center flex overfloh-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                          >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#F8F2E3] outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                </div>
                                {/*body*/}
                                <div className="relative p-6 ml-9 flex-auto ">
                                  <img src={alert} alt="Correct"/>
                                  <p className="text-[#5F5B50] pt-6 text-lg leading-relaxed w-[300px]">{text}</p>
                                </div>
                                {/*footer*/}
                                <div className="flex justify-center items-center rounded-b-lg rounded-t-2xl" style={{"backgroundColor": color}}>
                                  <div className="relative items-center justify-center p-6 rounded-b ">
                                    <button
                                      className="bg-[#5f5b50] rounded-[37px] text-white font-bold uppercase text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={() => {setShowModal(false); nextStage()}}
                                    >
                                      NEXT
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                                  </div>
                    {/* <button className='text-center font-["lalezar"] text-white py-3 mt-[250px] ml-[23px] w-[344px] h-[42px] bg-[#403d35] rounded-[12px] shadow-[0px_4px_4px_#00000040]' onClick={verifyAnswerAndMoveToNext} >CHECK</button> */}
                  </div>

        </div>
      </DragDropContext>

      <div >
        
      </div>
    </div>
  );
};

export default Stage3;
