import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import Song from "../../../db/data";

import MusicCard from "../../MusicCard/MusicCard";


export default function TrendingSwiper({id,lim}) {
    const [SongData,setData]=useState(Song);
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
            <div>Trending songs</div>
            {
                SongData.map((curr)=>{
                  if(curr.id<id && curr.id>lim){
                    return(
                       <SwiperSlide style={{ width: "fit-content" }} key={curr.id}><MusicCard data={curr} /></SwiperSlide> 
                    )
                  }
                   
                })
            }
              

            </Swiper>
        </>
    );
}
