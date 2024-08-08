import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    A11y,
    EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "../layouts/Button";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const HeroSlider = ({ slides }) => {
    const controls = useAnimation();

    // Function to handle slide change and trigger animation
    const handleSlideChange = () => {
        controls.start("hidden").then(() => {
            controls.start("visible");
        });
    };

    // Trigger animation for the first slide on initial render
    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    return (
        <Swiper
            autoplay={{
                delay: 12000,
                disableOnInteraction: false,
            }}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }}
            modules={[Navigation, Pagination, Autoplay, A11y, EffectCreative]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange} // Trigger animation on slide change
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i} className="relative ">
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#1f641a8d] from-70%"></div>
                    <img 
                        className="h-screen object-cover w-full" 
                        src={slide.url} 
                        alt="Slide image" 
                        // loading="lazy" 
                        // srcSet={`${slide.url}?w=600 600w, ${slide.url}?w=1200 1200w`} 
                        // sizes="(max-width: 600px) 600px, 1200px"
                    />

                    <div className="w-11/12 lg:w-4/5 absolute lg:bottom-[35%] lg:left-32 bottom-[15%] left-4 space-y-6 mt-10 text-white">
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-5xl font-bold leading-tight"
                        >
                            {slide.text}
                        </motion.h1>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="pb-8"
                        >
                            {slide.sub}
                        </motion.p>

                        <Button title="Learn More" link={slide.link} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
