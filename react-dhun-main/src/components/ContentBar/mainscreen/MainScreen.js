import React from 'react'


import "./mainscreen.css"
import ArtistSwiper from './artistSwiper'
import TrendingSwiper from './muicsSwiper'
const MainScreen = () => {
  return (
    <div className=' w-full h-full overflow-y-scroll scroll-smooth mainscreencontainer'>
      <div className="w-full flex flex-col my-7 ">
        <div className="font-medium text-3xl text-slate-300 leading-8 favartist">
          Fav Artists
        </div>
        <ArtistSwiper />

      </div>
      <div className="w-full flex flex-col my-10 ">
        <div className="font-medium text-3xl text-slate-300 leading-8 mb-3">
          Trending Music
        </div>
        <TrendingSwiper id={11} lim={0} />
      </div>
      <div className="w-full flex flex-col my-10 ">
        <div className="font-medium text-3xl text-slate-300 leading-8 mb-3 z-10">
          Songs For You
        </div>
        <TrendingSwiper id={20} lim={11} />
      </div>


    </div>
  )
}

export default MainScreen
