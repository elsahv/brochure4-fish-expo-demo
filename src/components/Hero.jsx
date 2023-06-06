import HeroImg from "../images/sliderImg1.jpg";

const Hero = () => {
  return (
    //* HeroSection
    <section className="">
      <div className="absolute flex items-center z-20 w-full h-screen">
        <div className="_textShadowBold text-white flex items-center w-3/5 flex-col">
          <h2 className="text-6xl my-4">HoveyRoofing Company</h2>
          <span className="text-3xl ml-[50px]">
            Serving Redlands and surrounding areas since 1988
          </span>
        </div>
      </div>
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
