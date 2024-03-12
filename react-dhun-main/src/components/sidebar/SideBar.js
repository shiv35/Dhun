import React, { useEffect, useState, useRef } from 'react'
import "./SideBar.css"
import { AiFillHome } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import { BiLibrary } from 'react-icons/bi';
import RecentSongs from '../RecentSongs';
import { Link } from 'react-router-dom';
import { useMusic } from '../../control/MainControl';
import Likedsong from '../shivComp/sharecomponent/Likedsong';
const SideBar = () => {
  const control = useMusic();
  const [data, setdata] = useState([]);
  let recentsong = control.RecentSongs();
  const scrollRef = useRef(null);
  function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;

    }
  };
  useEffect(() => {
    const uniqueObjects = [];

    // Iterate over each object in the array
    recentsong.forEach((object) => {
      // Check if the object already exists in the uniqueObjects array
      if (!uniqueObjects.some((item) => isEqual(item, object))) {
        uniqueObjects.push(object);
      }
    });
    console.log(uniqueObjects);
    setdata(uniqueObjects);
    scrollToTop();
  }, [recentsong])
  return (
    <div className='main-side h-full'>
      < h1 className='greet' > Good Afternoon...</ h1>
      <div className='nav_link'>

        <span><Link className='lin' to='/musicapp'><AiFillHome className='icon' />Home</Link></span>
        <span><Link className='lin' to='/musicapp/search'><ImSearch />Search</Link> </span>
        <span><Link className='lin' to='/musicapp/library'> <BiLibrary className='icon' />Library</Link></span>
      </div>
      <div className='text-slate-100 text-xl recentlyplayed'>Recently Played...</div>
      <div ref={scrollRef} className='w-full max-h-full flex flex-col-reverse overflow-y-scroll scroll-smooth '>
        {
          data.map((item) => {
            return (
              <Likedsong data={item} />
            )

          })
        }

      </div>


    </div >
  )
}

export default SideBar
