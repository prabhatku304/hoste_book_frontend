const data = [
  {
    name: "Room-1",
    description: "Indulge in a Memorable One-Time Romantic Dinner ",
    type: "ROOM",
    price: 500,
    thumbnail: "./images/room-1.webp",
    booked: 20,
  },
  {
    name: "Room-2",
    description: "Indulge in a Memorable One-Time Romantic Dinner ",
    type: "ROOM",
    price: 500,
    thumbnail: "./images/room-1.webp",
    booked: 20,
  },
  {
    name: "Room-3",
    description: "Indulge in a Memorable One-Time Romantic Dinner ",
    type: "ROOM",
    price: 500,
    thumbnail: "./images/room-1.webp",
    booked: 20,
  },
];
const RoomList = () => {
  return (
    <div className="w-full h-full py-12">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {data.map((ele, i) => (
          <div className="rounded-[20px] w-full shadow-lg p-4" key={i}>
            <div className="min-h-[300px]">
              <img
                src={ele.thumbnail}
                className="w-full h-[50%] object-cover"
              />
            </div>
            <div className="py-4 flex flex-col gap-8">
              <div className="">
                <div className="caption text-gray-500">ROOM</div>
                <div className="flex flex-row justify-between py-2">
                  <div className="h5-thin">{ele.name}</div>
                  <div className=""></div>
                </div>
                <div className="mx-1 caption text-gray-500">
                  {ele.description}{" "}
                </div>
              </div>
              <div className="h5-thin text-center">
                Rs. {ele.price}{" "}
                <span className="body-1 text-gray-500"> /nights</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
