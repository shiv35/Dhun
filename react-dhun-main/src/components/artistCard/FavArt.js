import "./FavArt.css"

const FavArt = ({data}) => {
     const {img ,artist_name}=data
    return (
        <div className="bg-slate-100 h-full w-36 p-3 rounded-xl mx-8 min-w-32 favartcard">
            <img className="h-[7rem] w-full rounded-[50%] bg-contain" alt="title" src={img}></img>
            <div className="flex w-full justify-center text-xl font-thin pt-2 favartcardtext">{artist_name}</div>
        </div>
    );


}
export default FavArt;