// import 'bootstrap/dist/css/bootstrap.min.css';
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import "./SongTitle.css"
import { useState } from "react";
import { useMusic } from "../../../control/MainControl";
import { AiFillHeart } from "react-icons/ai";
function LibCard({ data }) {
    const control = useMusic();
    const {title,imgsrc,audioSrc,artist} = data
    const [like, setLike] = useState(true);
    const Handlelike = () => {
        if (like == false) {
            control.LikeSearch(data);
            setLike(!like);
        }
        else {
            control.deleteLiked(title);
            setLike(!like);
        }






    }
    return (
        <li className="songItem w-full h-20">

            <img src={imgsrc} alt=""></img>
            <h5>{title} <br></br>
                <div className="subtitle">{artist}</div>
            </h5>
            <div className='icons'>
                <BiPlayCircle className='PlayIcon' onClick={() => { control.playLib(data) }} />
                <button onClick={() => { Handlelike(data) }}>{like ? <AiFillHeart className='heart' /> : <AiOutlineHeart className='heart' />}</button>
            </div>
        </li>
    );
}
export default LibCard;   