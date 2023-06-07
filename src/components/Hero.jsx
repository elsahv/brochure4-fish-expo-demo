import HeroImg from "../images/sliderImg1.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView="show"
    >
      <div className="relative flex items-center z-20 w-full h-screen">
        <div className="_textShadowBold text-white flex items-center flex-col">
          <h2 className="md:text-6xl text-5xl my-4">HoveyRoofing Company</h2>
          <span className="md:text-3xl text-lg ml-[75px]">
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
    </motion.section>
  );
};

export default Hero;
