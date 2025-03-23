// import { motion } from "framer-motion";
import airbnb from "@/assets/brands/airbnb.svg";
import etsy from "@/assets/brands/etsy.svg";
import myntra from "@/assets/brands/myntra.svg";
import nasa from "@/assets/brands/nasa.svg";
import uber from "@/assets/brands/uber.svg";

const brands = [
    airbnb,
    etsy,
    myntra,
    nasa,
    uber
];

const Brands = () => {
//   const totalWidth = brands.length * (150 + 32); // width + gap of each brand

  return (
    <div className="w-full bg-white/5 backdrop-blur-2xl py-12 overflow-hidden">
      <div className="relative flex">
        {/* <motion.div
          className="flex gap-8"
          animate={{
            x: [-totalWidth, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        > */}
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-[150px] h-[60px] flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`duplicate-${index}`}
              className="w-[150px] h-[60px] flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Brands;