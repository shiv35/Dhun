import React, { useEffect, useState } from 'react'
import SwipeArt from '../mainscreen/artistSwiper'
import './library.css'

import { useMusic } from '../../../control/MainControl';
import SongTitle from '../../shivComp/sharecomponent/SongTitle';
import LibCard from '../../shivComp/sharecomponent/libcard';

const Librarypage = () => {
  const [datas, setdata] = useState([]);
  const MusicControl = useMusic();

  let likedata = MusicControl.SendLike();
  useEffect(() => {
    MusicControl.getLiked();
    likedata = MusicControl.SendLike();
    console.log(likedata)
    setdata(likedata);
  }, [])


  return (
    <div className='w-full h-full flex flex-col librarycontainer'>
      <div className='flex flex-col h-[90%] overflow-y-scroll scroll-smooth'>
        {
          datas.map((item) => {
            return (
              <LibCard data={item} />
            )

          })


        }
      </div>
    </div>
  )
}

export default Librarypage
