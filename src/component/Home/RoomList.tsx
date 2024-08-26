"use client";
import { roomsData } from "@/data/rooms";
import Slider from "react-slick";

const thumbnailSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};
const RoomList = () => {
  return (
    <div className="w-full h-full py-12">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {roomsData.map((ele, i) => (
          <div className="w-full md:w-1/3 shadow-lg p-4 rounded-[20px]" key={i}>
            <div className="h-[200px] md:h-[300px] w-full" id="room_thumbnails">
              <Slider {...thumbnailSettings}>
                {ele.thumbnails &&
                  ele.thumbnails.map((thumb, i) => (
                    <img
                      src={thumb.uri}
                      className="w-full h-[200px] md:h-[300px] object-cover hover:scale-150 transition ease-in-out delay-[200ms]"
                      key={i}
                    />
                  ))}
              </Slider>
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
