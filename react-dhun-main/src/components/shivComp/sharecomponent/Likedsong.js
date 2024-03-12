// import 'bootstrap/dist/css/bootstrap.min.css';
import "./likedsong.css"

export default function Likedsong(data) {
    const { artist, imgSrc, title } = data.data

    return (
        <>
            <li className="LikedSong">

                <img src={imgSrc} alt=""></img>
                <h5>{title} <br></br>
                    <div className="subtitle">{artist}</div>
                </h5>

            </li>
        </>

    )
}