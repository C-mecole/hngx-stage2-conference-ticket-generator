// import React from 'react'
import { useState } from 'react'
import First from './components/First'
import Header from './components/Header'
import Second from './components/Second'
import Third from './components/Third'


const App = () => {
  const [toShow, setToShow] = useState ();
  const [lastSlide, setLastSlide] = useState();

  let step = "";
  let text = "";

  const dynamicBar = () => {
    if (!toShow && !lastSlide) {
      step = "1";
      text = "Ticket Selection";;
    } else if (toShow && !lastSlide) {
      step = "2";
      text = "Attendee Details";
    } else if (lastSlide && !toShow) {
      step = "3";
      text = "Ready";
    }
  
    return { step, text };
  };
  const { step: currentStep, text: currentText, } = dynamicBar();
  return (
    <>
    <main  className="lg:py-12 p-2 flex flex-col justify-center items-center"
        style={{
          background:
            "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), #02191D",
        }}>
      <div>
      <Header/>
      </div>
    <div className=" lg:p-12 p-2 bg-[#041E23] rounded-[40px] border border-[#0e464f] flex-col justify-center items-center gap-8 flex">
      <div className="self-stretch h-12 flex-col justify-start items-start gap-3 flex">
      <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch text-white text-[32px] font-normal font-['JejuMyeongjo']">{currentText}</div>
        </div>
        <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">Step <span>{currentStep}</span>/3</div>
      </div>
      <div className="w-full bg-[#0E464F] grid grid-cols-3">
      <div className="h-[3px] " style={{
        backgroundColor:(!toShow && !lastSlide) ? "#24A0B5": "transparent",
      }}></div>
      <div className="h-[3px]" style={{
        backgroundColor:(toShow && !lastSlide)? "#24A0B5": "transparent"
      }}></div>
      <div className="h-[3px]" 
      style={{
        backgroundColor:(!toShow && lastSlide)? "#24A0B5": "transparent"
      }}
      ></div>
      </div>
      </div>
          <div style={{
            display:(!toShow && !lastSlide) ? "block": "none"
          }}>
          <First
          onClick={() => {
            setToShow(true);
            setLastSlide(false);
          }}
          />
          </div>
          <div style={{
            display:(toShow && !lastSlide) ? "block": "none"
          }}>
          <Second 
          onClick={() => {
              setToShow(false);
            setLastSlide(true);
            
          }}
          taskTwo={()=> {
            setToShow(false)
            setLastSlide(false)
          }}
          />
          </div>
          <div style={{
            display:(!toShow && lastSlide) ? "block": "none"
          }}>
          <Third/>
          </div>
        
    </div>
    </main>
    </>
  )
}

export default App