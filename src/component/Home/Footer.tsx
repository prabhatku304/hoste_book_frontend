const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] py-24 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between w-full gap-8">
        <div className="w-full md:w-[70%]">
          <div className="h5-thin text-white my-4">
            Newsletter & Speacial Promo
          </div>
          <div className="flex flex-row bg-white rounded-md overflow-hidden">
            <input
              type="email"
              className="w-full py-5 px-3"
              placeholder="Enter your Email here"
            />
            <button className="bg-[#65AEF2] px-6 text-white h5-thin">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-white  flex flex-row justify-evenly items-center w-full gap-8">
          <div className="flex flex-col gap-4 ">
            <div className="">About Us</div>
            <div className="">Contact</div>
            <div className="">Location</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="">Faq</div>
            <div className="">Terms</div>
            <div className="">Privacy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
