import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import SectionTitle from "./SectionTitle";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Campaign Creator",
      feedback:
        "Crowdcube helped me bring my project to life. The support and funding exceeded my expectations!",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Donor",
      feedback:
        "It's amazing to be part of meaningful projects. The platform is easy to use and trustworthy.",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Campaign Creator",
      feedback:
        "I reached my funding goal in record time! Thank you for making fundraising so accessible.",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      id: 4,
      name: "Michael Smith",
      role: "Campaign Creator",
      feedback:
        "I reached my funding goal in record time! Thank you for making fundraising so accessible.",
      image: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-5">
        <SectionTitle title={'Testimonials'} subTitle={'Hear from our amazing supporters about their experience with our platform!'}></SectionTitle>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div
              className={`card max-w-xl border-2 border-amber-300 mx-auto shadow-lg p-6 text-center rounded-lg flex flex-col justify-center items-center `}
            >
              <div className="w-40 h-40 flex justify-center ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-full h-full"
                />
              </div>

              <div className="card-body">
                <h2 className=" text-2xl font-bold text-center">{testimonial.name}</h2>
                <p className="text-md font-bold text-gray-500">
                  {testimonial.role}
                </p>
               <p className="text-sm">{testimonial.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
