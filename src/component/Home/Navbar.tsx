const Navbar = () => {
  return (
    <nav className="hidden md:block rounded-[20px] bg-white absolute w-[70%] mx-auto inset-x-0 top-8 z-[100] container mx-auto">
      <div className="flex flex-row justify-between items-center py-4 px-8 cursor-pointer">
        <div className="btn-text">Home</div>
        <div className="btn-text">About</div>
        <div className="btn-text">Newsletter</div>

        <div className="">
          <img src="./images/logo.png" className="h-[40px] w-auto" />
        </div>
        <div className="btn-text">Rooms</div>
        <div className="btn-text">Services</div>

        <div className="btn-text">Pricing</div>
      </div>
    </nav>
  );
};

export default Navbar;
