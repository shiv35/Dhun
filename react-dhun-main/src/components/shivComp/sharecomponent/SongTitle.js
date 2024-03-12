// import 'bootstrap/dist/css/bootstrap.min.css';
import { BiPlayCircle } from "react-icons/bi";
import {  AiOutlineHeart  } from "react-icons/ai";
import "./SongTitle.css"
import { useState } from "react";
import { useMusic } from "../../../control/MainControl";
import { AiFillHeart } from "react-icons/ai";
function SongTitle({data}) {
    const control=useMusic();
   const { artistName, trackName, artworkUrl100, previewUrl}=data
    const [like, setLike] = useState(false);
    const Handlelike = () => {
        if (like == false) {
            control.LikeSearch(data);
            setLike(!like);
        }
        else{
            control.deleteLiked (trackName);
            setLike(!like);
        }
        
           
            
      

        
    }
    return (
        <li className="songItem w-full h-20">
         
            <img src={artworkUrl100} alt=""></img>
            <h5>{trackName} <br></br>
                <div className="subtitle">{artistName}</div>
            </h5>
            <div className='icons'>
            <BiPlayCircle className='PlayIcon' onClick={()=>{control.PlaySearch(data)}}  />
            <button onClick={() => { Handlelike(data) }}>{like ? <AiFillHeart className='heart' /> : <AiOutlineHeart className='heart' />}</button>
            </div>
        </li>
    );
}
export default SongTitle;   