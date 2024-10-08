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
                delay: 30000,
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
                    <div className="w-full h-full absolute top-0 left-0  bg-[#111111bf]"></div>
                    <img 
                        className="h-screen object-cover  w-full" 
                        src={slide.url} 
                        alt="Slide image" 
                        loading="lazy" 
                        srcSet={`${slide.url}`} 
                        sizes="(max-width: 600px) 600px, 1200px"
                    />

                    <div className="w-11/12 lg:w-4/5 absolute lg:bottom-[25%] lg:left-32 bottom-[20%] left-4 space-y-6 mt-10 text-gray-100  p-10 ">
                        <h1
                            className="md:text-5xl text-4xl font-bold leading-tight"
                        >
                            {slide.text}
                        </h1>
                        <p
                            className="pb-8 md:text-xl text-justify text-lg"
                        >
                            {slide.sub}
                        </p>

                        <Button title="Learn More" link={slide.link} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
