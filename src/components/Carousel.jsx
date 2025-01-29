import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/carousel.css";

const getRandomAnimation = () => {
  const animations = [
    { x: "-100%", opacity: 0 }, 
    { x: "100%", opacity: 0 }, 
    { y: "-100%", opacity: 0 },
    { y: "100%", opacity: 0 },  
    { scale: 0.5, opacity: 0 },
    { rotate: -10, opacity: 0 },
    { rotate: 10, opacity: 0 },
  ];
  return animations[Math.floor(Math.random() * animations.length)];
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textAnimation, setTextAnimation] = useState(getRandomAnimation());
  const [imageAnimation, setImageAnimation] = useState(getRandomAnimation());

  const slides = [
    {
      title: "NEW SEASON ARRIVAL",
      subtitle: "I9 - 11th gen PC Build",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "/images/Desktop.png",
    },
    {
      title: "LATEST GAMING GEAR",
      subtitle: "Ryzen 9 - RTX 4080 Build",
      description:
        "Upgrade your gaming experience with cutting-edge technology and ultra-fast performance.",
      img: "/images/Desktop2.png",
    },
    {
      title: "ULTRA HD PERFORMANCE",
      subtitle: "Nvidia RTX 4060 8GB New",
      description:
        "Experience smooth gameplay and high frame rates with the latest gaming hardware.",
      img: "/images/VGA-Card1.png",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="custom-swiper"
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.realIndex);
        setTextAnimation(getRandomAnimation());
        setImageAnimation(getRandomAnimation()); 
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <div className="flex flex-row gap-8 w-full px-6 lg:px-24 items-center justify-between">
            
            <motion.div
              key={activeIndex}
              className="flex flex-col text-left text-white max-w-md"
              initial={textAnimation}
              animate={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h3 className="text-teal-400 font-normal text-lg" style={{ fontFamily: "var(--font-roboto)" }}>
                {slide.title}
              </h3>
              <h2 className="text-4xl md:text-[36px] font-normal mt-2" style={{ fontFamily: "var(--font-quicksand)" }}>
                {slide.subtitle}
              </h2>
              <p className="mt-4 text-gray-300 font-normal" style={{ fontFamily: "var(--font-quicksand)" }}>
                {slide.description}
              </p>
            </motion.div>

            <motion.div
              key={`image-${activeIndex}`} 
              initial={imageAnimation}
              animate={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img src={slide.img} alt={slide.subtitle} className="w-full h-[80vh] object-cover" />
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
