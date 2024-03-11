import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
const SwaperSlider = () => {
  return (
    <div>
      <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={true}
          loop={true}
          
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper  swiper"
        >
          <Swiper className="swiper-wrapper">
            <SwiperSlide className="swiper-slide swiper-slide--one" >
              <div >
                <div>
                  <h2>Lorem, ipsum.</h2>
                  <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus ducimus quo soluta vitae et officia sed quisquam neque perferendis?
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish">explore</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide--two" >
              <div >
                <div>
                  <h2>Lorem, ipsum.</h2>
                  <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorem veritatis non in enim omnis ducimus eligendi voluptate dolor quia!
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish">explore</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide--three" >
              <div >
                <div>
                  <h2>Lorem, ipsum.</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam alias impedit quia, odit pariatur, eos suscipit, quasi ducimus aut sint fugiat asperiores blanditiis minus enim!
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish">explore</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide--four" >
              <div >
                <div>
                  <h2>Lorem, ipsum.</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur accusantium dolorum dolore fugiat possimus nobis quo neque quibusdam itaque iure voluptatum velit, id, vel officia..
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish">explore</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide--five" >
              <div >
                <div>
                  <h2>Lorem, ipsum.</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quaerat? Libero consequatur corrupti aperiam, pariatur iste nisi nihil sequi. Consequatur corporis quasi quisquam pariatur cum.
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish">explore</a>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className="swiper-slide swiper-slide--one" >
              <div >
                <div>
                  <h2>Jellyfish</h2>
                  <p>
                    Jellyfish and sea jellies are the informal common names
                    given to the medusa-phase of certain gelatinous members of
                    the subphylum Medusozoa, a major part of the phylum
                    Cnidaria.
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish">explore</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide--one" >
              <div >
                <div>
                  <h2>Jellyfish</h2>
                  <p>
                    Jellyfish and sea jellies are the informal common names
                    given to the medusa-phase of certain gelatinous members of
                    the subphylum Medusozoa, a major part of the phylum
                    Cnidaria.
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish">explore</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide--one" >
              <div >
                <div>
                  <h2>Jellyfish</h2>
                  <p>
                    Jellyfish and sea jellies are the informal common names
                    given to the medusa-phase of certain gelatinous members of
                    the subphylum Medusozoa, a major part of the phylum
                    Cnidaria.
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish">explore</a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide swiper-slide--one" >
              <div >
                <div>
                  <h2>Jellyfish</h2>
                  <p>
                    Jellyfish and sea jellies are the informal common names
                    given to the medusa-phase of certain gelatinous members of
                    the subphylum Medusozoa, a major part of the phylum
                    Cnidaria.
                  </p>
                  <a href="https://en.wikipedia.org/wiki/Jellyfish">explore</a>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </Swiper>
    </div>
  )
}

export default SwaperSlider
