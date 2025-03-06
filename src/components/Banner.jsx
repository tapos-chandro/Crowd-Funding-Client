import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from 'react-simple-typewriter'
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {



  const banners = [
    {
      id: 1,
      image: "https://i.ibb.co.com/BKt3gPgS/banner1.jpg",
      title: "Turning Ideas into Reality!",
      description:
        " Every big idea starts with a dream. Fund groundbreaking projects, support creative minds, and be part of something bigger. Your contribution makes a difference!",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/tp2VGkR3/banner2.jpg",
      title: "Powering Innovation Together!",
      description:
        "Join a thriving community of innovators and backers. Whether it's a startup, a passion project, or a cause close to your heart—your support fuels the future!",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/fYQJcFDq/banner3.jpg",
      title: "The Future of Funding is Here!",
      description:
        "Connect with entrepreneurs and investors to bring game-changing ideas to life. Back startups, launch products, and invest in tomorrow’s success today!",
    },
  ];
  


  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner?.id} className="relative">
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full lg:max-h-[90vh] object-cover "
          />
          <div className=" absolute top-0 h-full flex justify-center flex-col items-center  w-full   p-5 bg-[#000000a5] ">
            <div className="max-w-4xl text-center space-y-2">
              <h2 className="lg:text-6xl font-bold text-xl text-white  ">
               
                <Typewriter words={[banner.title]} loop={true} cursor  />
              </h2>
              <p className="text-gray-400 lg:text-xl text-sm ">
                {banner.description}
              </p>
              <button className="btn">Donate Now</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
