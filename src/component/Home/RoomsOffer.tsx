import RoomList from "./RoomList";

const RoomsOffer = () => {
  return (
    <section className="bg-[#fdfdfe] py-12 px-8">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4">
          <div className="w-[70%]">
            <div className="h2-thin h5-sm-thin">Best offer of the month</div>
            <div className="h6-thin body-2-sm text-gray-500 mx-1">
              Experience Fantastic Benefits and Obtain Better Rates When You{" "}
              <br className="md:block hidden" />
              Make a Direct Booking on Our Official Website
            </div>
          </div>
          <div className="flex justify-end w-[30%]">
            <button className="uppercase text-[#65AEF2] body-1">
              View All
            </button>
          </div>
        </div>
        <div className="">
          <RoomList />
        </div>
      </div>
    </section>
  );
};

export default RoomsOffer;
