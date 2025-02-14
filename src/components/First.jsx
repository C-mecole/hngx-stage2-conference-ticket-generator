import React, { useState, useEffect, useRef } from "react";

const First = ({ onClick }) => {
  const [selectedBox, setSelectedBox] = useState("free");
  const [numberOfTicket, setNumberOfTicket] = useState("1");

  const selectRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("selectedBox", selectedBox);
    window.dispatchEvent(new Event("storageUpdate"));
  }, [selectedBox]);

  useEffect(() => {
    localStorage.setItem("numberOfTicket", numberOfTicket);
    window.dispatchEvent(new Event("storageUpdate"));
  }, [numberOfTicket]);

  const handleKeyDown = (e, elementType) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault(); 
      const boxes = ["free", "vip", "vvip"];
      const currentIndex = boxes.indexOf(selectedBox);
      const nextIndex = e.key === "ArrowRight" ? (currentIndex + 1) % boxes.length : (currentIndex - 1 + boxes.length) % boxes.length;
      setSelectedBox(boxes[nextIndex]);
    }

    if (e.key === "Enter") {
      if (elementType === "ticket") {
        selectRef.current.focus();
      }

      if (elementType === "select") {
        nextButtonRef.current.focus(); 
      }

      if (elementType === "button") {
        onClick(); 
      }
    }
  };

  return (
    <>
      <div className="lg:h-[858px] h-fit lg:p-12 p-6 bg-[#041E23] rounded-[40px] border border-[#0e464f] flex-col justify-center items-center gap-8 flex lg:w-[750px] mx-auto w-11/12">
        <div className="self-stretch lg:h-[780px] h-fit p-6 bg-[#08252B] rounded-[32px] border border-[#0e464f] flex-col justify-center items-start gap-8 flex w-full mx-auto">

          <div className="self-stretch text-center text-neutral-50 lg:text-[62px] md:text-4xl text-3xl font-normal font-['Road Rage'] leading-[62px]">Techember Fest ”25</div>
          <div className="lg:w-[340px] w-11/12 mx-auto text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
            Join us for an unforgettable experience at Techember! Secure your spot now.
          </div>

          <div className="self-stretch lg:h-[218px] h-fit flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
              Select Ticket Type:
            </div>
            <div className="self-stretch lg:h-[186px] h-fit lg:p-4 bg-[#052228] rounded-3xl border border-[#07373F] flex-col justify-center items-center gap-4 flex w-full">
              <div className="self-stretch justify-start items-start gap-3 lg:grid md:grid-cols-2 lg:grid-cols-3 p-3 flex flex-col w-full">
                {["free", "vip", "vvip"].map((box) => (
                  <div
                    id={box}
                    key={box}
                    onClick={() => setSelectedBox(box)}
                    onKeyDown={(e) => handleKeyDown(e, "ticket")}
                    style={{
                      backgroundColor: selectedBox === box ? "#12464E" : "transparent"
                    }}
                    tabIndex={0} 
                    className="self-stretch lg:h-[110px] h-fit p-3 rounded-xl border border-[#197686] justify-start items-start gap-3 flex flex-col"
                  >
                    <div className="text-neutral-50 text-xl font-semibold font-['Roboto'] leading-snug">
                      {box === "free" ? "Free" : box === "vip" ? "$50" : "$150"}
                    </div>
                    <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">
                      {box === "free" ? "Regular Access" : box === "vip" ? "VIP Access" : "VVIP Access"}
                    </div>
                    <div className="text-neutral-50 text-sm font-normal font-['Roboto'] leading-[21px]">
                      20 left!
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="self-stretch lg:h-20 h-fit flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
              Number of Tickets
            </div>
            <div className="self-stretch rounded-xl border border-[#07373F] justify-start items-center gap-2 inline-flex">
              <select
                value={numberOfTicket}
                onChange={(e) => setNumberOfTicket(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, "select")}
                className="self-stretch p-3 rounded-xl border border-[#07363e] justify-start items-center gap-2 inline-flex w-full bg-inherit text-white outline-none grow shrink basis-0 text-base font-normal font-['Roboto'] leading-normal"
                ref={selectRef}
              >
                <option className="text-black">1</option>
                <option className="text-black">2</option>
                <option className="text-black">3</option>
                <option className="text-black">4</option>
                <option className="text-black">5</option>
              </select>
            </div>
          </div>
          <div className="self-stretch justify-center items-center lg:gap-8 gap-4 inline-flex lg:flex-row flex-col">
            <div className="self-stretch grow shrink basis-0 lg:h-12 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex">
              <button className="text-[#23a0b5] text-base font-normal font-['JejuMyeongjo'] leading-normal h-12 w-full">
                Cancel
              </button>
            </div>
            <div className="self-stretch grow shrink basis-0 lg:h-12 bg-[#23a0b5] rounded-lg justify-center items-center gap-2 flex">
              <button
                ref={nextButtonRef}
                onClick={onClick}
                onKeyDown={(e) => handleKeyDown(e, "button")}
                className="text-white text-base font-normal font-['JejuMyeongjo'] leading-normal h-12 w-full"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
