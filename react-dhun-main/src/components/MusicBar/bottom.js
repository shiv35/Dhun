import React, { useRef, useState,useEffect } from 'react';
import "./bottom.css";
import img1 from './imgs/img7.jpg';
import { FaPlay } from "react-icons/fa";
import { BsFillPauseFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { CiRepeat } from "react-icons/ci";
import { useMusic } from '../../control/MainControl';

const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [info,setinfo]=useState({})
  const seek = useRef();
  // Import custom hook
  const musicControl = useMusic();
  let songinfo = musicControl.returnInfo();
 const { artist, imgSrc, title }=songinfo
 useEffect(()=>{
    setinfo(songinfo);
    if(info){
      console.log(songinfo);
      setIsPlaying(true);
    }
 },[songinfo])

  const handle = () => {
    musicControl.handlePlay(isPlaying); // Call handlePlay method from the custom hook
    setIsPlaying(!isPlaying); // Toggle isPlaying state
  };

 


  return (
    <>
      {imgSrc && <div className="flex bg-[#0f0f0f] h-full w-full">
        {/* Song Info */}
        <span className="flex py-[1%] px-[2%] w-72  ">
          <span className="img_box">
            <img src={imgSrc} alt="titlaae" className='h' />
          </span>
          <span className="song_details text-slate-50">
            <span>{title}</span>
            <span>{artist}</span>
          </span>
        </span>

        {/* Music Controls */}
        <div className='control text-slate-50'>
          <span className="icons">
            {/* Repeat Button */}
            <button>
              <CiRepeat className='icony text-slate-50' />
            </button>

            {/* Previous Button */}
            <button>
              <AiFillStepBackward className='icony text-slate-50' onClick={() => musicControl.handlePreviousSong()} />
            </button>

            {/* Play/Pause Button */}
            <button onClick={() => { handle() }} id='masterPlay'>
              {isPlaying ? <BsFillPauseFill className='icony text-slate-50' /> : <FaPlay className='iconys text-slate-50' />}
            </button>

            {/* Next Button */}
            <button>
              <AiFillStepForward className='icony text-slate-50' onClick={() => musicControl.handleNextSong()} />
            </button>

            {/* Shuffle Button */}
            <button>
              <BiShuffle className='icony text-slate-50' />
            </button>
          </span>

          {/* Progress Bar */}
          <span className="progress_bar text-slate-50">
            <span> 0:0</span>
            <input
              type="range"
              value={0}
            />
            <span> 4:30</span>
          </span>
        </div>

        {/* Volume Controls */}
        <span className="volume">
          <BsFillVolumeUpFill className='vol text-slate-50' />
          <input type='range' height={"3"}></input>
        </span>
      </div>}
    </>
  
  );
}

export default MusicBar;
