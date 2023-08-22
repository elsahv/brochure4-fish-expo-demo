import HeroImg from "../images/hero-fish.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView="show"
    >
      <div className="flex items-center w-full h-screen">
        <div className="absolute z-50 _textShadowBold text-white flex items-center flex-col">
          <h2 className="md:text-6xl text-5xl my-4">Fish Expo</h2>
          <span className="md:text-3xl text-lg ml-[75px]">
            Celebrating aquatic life since 1998
          </span>
        </div>
      </div>
      <div className="w-full  flex justify-center items-center">
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
