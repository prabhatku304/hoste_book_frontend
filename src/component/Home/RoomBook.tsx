"use client";
import { CalenderIcon, ChildIcon, PersionIcon } from "../Common/Icon";

const RoomBook = () => {
  return (
    <section className="container mx-auto px-8 py-12 md:py-24">
      <div className="bg-[#E9F3F6] rounded-[20px] py-8">
        <div className="text-center py-8">
          <div className="h4-thin">Book a Room</div>
          <div className="text-gray-400 body-1">
            Discover the perfect space for you!
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around my-8 w-[80%] mx-auto gap-6">
          <div className="flex flex-col gap-2">
            <label>Date</label>
            <div className="bg-white rounded-[7px] px-6 py-2">
              <input id="date_" className="sr-only" type="date" />
              <div
                className="py-2 flex flex-row gap-6 cursor-pointer"
                onClick={() => {
                  const datepicker: any = document.getElementById("date_");
                  if (datepicker) datepicker.showPicker();
                }}
              >
                <div className="">
                  <CalenderIcon />
                </div>
                <div className="body-2 ">Check Available</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Person</label>
            <div className="bg-white rounded-[7px] px-6 py-4 md:py-2 flex flex-col md:flex-row gap-8">
              <div className="flex flex-row gap-6 items-center py-2">
                <div className="">
                  <PersionIcon />
                </div>
                <div className="body-2">Adults</div>
                <div className="">
                  <select className="outline-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center">
                <div className="">
                  <ChildIcon />
                </div>
                <div className="body-2">Children</div>
                <div className="">
                  <select className="outline-none">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <button className="bg-[#65AEF2] px-16 py-4 rounded-[10px] uppercase btn-text text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomBook;
