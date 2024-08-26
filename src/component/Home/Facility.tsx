const Facility = () => {
  return (
    <section className="bg-[#F3F3F3]  py-12 h-full px-4">
      <div className="flex md:flex-row flex-col h-full container mx-auto gap-8">
        <div
          className="w-full h-[280px] md:h-full md:w-[33%] bg-cover bg-no-repeat rounded-[42px]  relative"
          style={{
            backgroundImage: "url('./images/facility-1.webp')",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white absolute bottom-4 inset-x-0 mx-auto w-full flex justify-center h4-thin h6-sm-thin ">
            Rooms
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full md:w-[77%] h-full">
          <div className="flex flex-row gap-8 h-[50%]">
            <div
              className="bg-cover bg-no-repeat rounded-[42px]  relative h-auto w-[50%]"
              style={{ backgroundImage: "url('./images/facility-2.webp')" }}
            >
              <div className="text-white absolute bottom-4 inset-x-0 mx-auto w-full flex justify-center h4-thin h6-sm-thin">
                Dining
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat rounded-[42px]  relative h-auto w-[50%]"
              style={{ backgroundImage: "url('./images/facility-3.webp')" }}
            >
              <div className="text-white text-center absolute bottom-4 inset-x-0 mx-auto w-full flex justify-center h4-thin h6-sm-thin">
                Conferences & <br />
                Meetings
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-8 h-[50%] text-center">
            <div
              className="bg-cover bg-no-repeat rounded-[42px]  relative h-auto w-[50%]"
              style={{ backgroundImage: "url('./images/facility-4.webp')" }}
            >
              <div className="text-white absolute bottom-4 inset-x-0 mx-auto w-full flex justify-center h4-thin h6-sm-thin">
                Service & Facilities
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat rounded-[42px]  relative h-auto w-[50%]"
              style={{ backgroundImage: "url('./images/facility-5.webp')" }}
            >
              <div className="text-white absolute bottom-4 inset-x-0 mx-auto w-full flex justify-center h4-thin h6-sm-thin">
                Wedding Packages
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
