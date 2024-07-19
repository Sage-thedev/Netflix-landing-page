import React, { useState } from 'react'
import {questions} from '../components/Questions'
import { MdOutlineClose } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'

function Faq() {

    const [current, setCurrent] = useState(null)

    // create a function that will display answwer

    function displayAnswer(id) {
        if(current === id){
            setCurrent(null)
            return;
        }
            setCurrent(id)
    }
  return (
    <div>
        <section className='bg-black text-white px-8 py-12 border-t-8 border-t-zinc-700'>
            <h2 className='text-center text-[30px] lg:text-[60px] pb-5'>Frequently Asked Questions</h2>

            <div>
                {
                    questions.map((question, i) => (
                        <div key={i} className={`mb-4 ${current === i? "h-fit" : "h-[70px]"} overflow-y-hidden transition delay-500 duration-300 ease-in cursor-pointer`} >
                            <div className="flex items-center justify-between px-3 h-[70px] bg-zinc-900 text-2xl hover:bg-zinc-800 " onClick={()=> displayAnswer(i)}>
                                <h3 className=''>{question.question}</h3>
                                <div>{current === i ? <MdOutlineClose/> : <FaPlus/>}</div>
                            </div>
                            <div className='bg-zinc-600 mt-1 px-3 py-1'>
                                {
                                    question.answer.map((ans, i) =>(
                                          <p key={i} className={"mb-8 text-lg lg:text-2xl"}>
                                            {ans}
                                          </p>  
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center justify-center lg:h-full h-auto p-3 px-10 text-white'>
          <div className='text-center text-xl flex flex-col items-center gap-5 py-5  px-10'>
            <p className='font-semibold'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='flex lg:flex-row md:flex-row flex-col gap-3 items-center'>
              <input type="email" className='border-2 border-[#ffffff33] p-3 rounded lg:w-96 w-80 bg-[#00000046]' placeholder='Email address' />
              <button className='flex items-center rounded font-sans font-semibold py-3 px-7 text-white bg-red-600'>
                Get Started <i className="fas fa-chevron-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Faq