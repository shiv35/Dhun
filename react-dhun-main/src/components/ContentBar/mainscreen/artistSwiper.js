import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { artist } from "../../../db/Images/artistdata";


// import required modules
import { Pagination } from "swiper";
import FavArt from "../../artistCard/FavArt";

export default function ArtistSwiper() {
    const [data,setData]=useState(artist);
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className=" max-w-[95%]"
            >
                {
                    data.map((item)=>{
                        return(
                            <SwiperSlide style={{ width: "fit-content" }}><FavArt data={item} /></SwiperSlide>
                        )
                    })
                }
               
             
            </Swiper>
        </>
    );
}
