const HomeHero = () => {
  return (
    <section className="h-[60%] md:h-[80%] w-full" id="home_hero">
      <div
        className=" h-full w-full bg-no-repeat bg-cover px-4"
        style={{
          backgroundImage: "url('./images/hero.webp')",
        }}
      >
        <div className="h-full w-full flex items-end justify-start container mx-auto ">
          <div className="text-white mb-16">
            <h2 className="h2-thin h5-sm-thin font-bold">
              Welcome to Rainbow <br />
              Lining Hostels
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
