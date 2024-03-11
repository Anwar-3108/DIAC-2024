
import { Carousel } from 'flowbite-react';
import diac_homepage_banner_img from "../assets/images/pages/Home/diac-homepage-banner-0.1.jpg"
import Offer_Cards from './Offer_Cards';
import Card_Carousel from './Card_Carousel';
const Hero = () => {
 

  return (
    <div className=''>

    <div className="md:h-56 h-64 lg:h-[530px] ">
    <Carousel slideInterval={5000} >
      <img src={diac_homepage_banner_img} className="object-cover   object-center " alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
    </Carousel>
  </div>

  {/* <Card_Carousel/> */}
    </div>
  );
};

export default Hero;
