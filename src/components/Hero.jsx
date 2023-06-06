import HeroImg from "../images/sliderImg1.jpg";

const Hero = () => {
  return (
    //* HeroSection
    <section className="">
      <div className="absolute flex items-center z-20 w-full h-screen">
        <div className="_textShadowBold text-white flex items-center flex-col">
          <h2 className="md:text-6xl text-xl my-4">HoveyRoofing Company</h2>
          <span className="text-3xl lg:ml-[75px] ml-[40px]">
            Serving Redlands and surrounding areas since 1988
          </span>
        </div>
      </div>
      .3
      <div className="absolute top-0 w-full h-screen flex justify-center items-center">
        <img
          src={HeroImg}
          alt=""
          className="absolute top-0 w-full h-screen object-cover z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
