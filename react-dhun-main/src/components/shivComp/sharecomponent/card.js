// import 'bootstrap/dist/css/bootstrap.min.css'
import { BiPlayCircle } from "react-icons/bi";
import {  AiOutlineHeart  } from "react-icons/ai";
import "./card.css"
export default function card() {
    return (
        <li class="songItem">
            <div class="img_play">
                <img src="" alt=""></img>
                <div className="icon2">
                <BiPlayCircle className="playicon"/>
                <AiOutlineHeart className="playicon"/>
                </div>
            </div>
            <h5>
                <div class="subtitle"></div>
            </h5>
        </li>
    );
}

