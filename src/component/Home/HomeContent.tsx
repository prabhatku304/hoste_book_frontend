import Facility from "./Facility";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Navbar from "./Navbar";
import RoomBook from "./RoomBook";
import RoomsOffer from "./RoomsOffer";

const HomeContent = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <HomeHero />

      <RoomBook />
      <Facility />
      <RoomsOffer />
      <Footer />
    </div>
  );
};

export default HomeContent;
