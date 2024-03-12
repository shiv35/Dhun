import React from 'react';
import { createContext, useContext } from "react";
import { useEffect, useState } from 'react';
import audio1 from '../components/MusicBar/imgs/1.mp3';
import Song from '../db/data';

// Create a context for the music functionality
const MusicContext = createContext();

// Custom hook to access the music context
export const useMusic = () => useContext(MusicContext);

export const MainControl = (props) => {
    // State variables
    const [music, setMusic] = useState(new Audio(audio1));
    const [isPlaying, setIsPlaying] = useState(false);
    const [i, setI] = useState(0);
    const username = localStorage.getItem("user");
    const [recent, setRecent] = useState([]);
    const [data, setData] = useState(Song);
    const [songInfo, setSongInfo] = useState({});
    const [searchdata,setSearch]=useState([]);
    const [sendlikes,setlike]=useState([]);

    // Function to retrieve the current song information
    const returnInfo = () => {
        return songInfo;
    };
    const RecentSongs=()=>{
        return recent;
    }

    const SendLike=()=>{
        return sendlikes;
    }
    // Function to play a specific song from the list
    const playSong = (num) => {
        const { song_name, artist_name, img, audio } = data[num-1];
        music.pause();
        music.currentTime = 0;
        const nextMusic = new Audio(audio);
        setMusic(nextMusic);
        setIsPlaying(true);
        nextMusic.play();
        setI(num);
        const tempSongInfo = { 'artist': artist_name, 'imgSrc': img, 'title': song_name };
        setRecent([...recent, tempSongInfo]);
        setSongInfo(tempSongInfo);
    };
    const playLib=(data)=>{
        const { title, imgsrc, audioSrc, artist } = data
        music.pause();
        music.currentTime = 0;
        const nextMusic = new Audio(audioSrc);
        setMusic(nextMusic);
        setIsPlaying(true);
        nextMusic.play();
        const tempSongInfo = { 'artist': artist, 'imgSrc':imgsrc, 'title': title };
        setRecent([...recent, tempSongInfo]);
        console.log(recent);
        setSongInfo(tempSongInfo);
    }
    // Function to handle play/pause functionality
    const handlePlay = (state) => {
        if ((music.paused || music.currentTime <= 0)&& state==false) {
            music.play();
            setIsPlaying(true);
        } else {
            music.pause();
            setIsPlaying(false);
        }
    };

    // Function to retrieve the current music
    const getMusic = () => {
        return music;
    };

    // Function to play the next song
    const handleNextSong = () => {
        let num = 0;
        if (i < 20) {
            num = i + 1;
        } else {
            num = 1;
        }
        const { song_name, id, artist_name, img, audio } = data[num];
        music.pause();
        music.currentTime = 0;
        const nextMusic = new Audio(audio);
        setMusic(nextMusic);
        nextMusic.play();
        setI(num);
        setIsPlaying(true);
        const tempSongInfo = { 'artist': artist_name, 'imgSrc': img, 'title': song_name };
        setRecent([...recent, tempSongInfo]);
        setSongInfo(tempSongInfo);
    };

    // Function to play the previous song
    const handlePreviousSong = () => {
        let num = 0;
        if (i > 1) {
            num = i - 1;
        } else {
            num = 20;
        }
        const { song_name, id, artist_name, img, audio } = data[num];
        music.pause();
        music.currentTime = 0;
        const nextMusic = new Audio(audio);
        setMusic(nextMusic);
        nextMusic.play();
        setI(num);
        setIsPlaying(true);
        const tempSongInfo = { 'artist': artist_name, 'imgSrc': img, 'title': song_name };
        setRecent([...recent, tempSongInfo]);
        setSongInfo(tempSongInfo);
    };

    // Function to search for music
    function searcher(inputs) {
        const url = `https://itunes.apple.com/search?term=${inputs}`;
        fetch(url)
            .then(response => {
                return response;
            })
            .then(response => {
                // Set the request mode to 'no-cors'
                const updatedResponse = new Response(response.body, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers,
                    mode: 'no-cors'
                });
                return updatedResponse.json();
            })
            .then(updatedResponse => {
                console.log(updatedResponse);
                setSearch(updatedResponse);
            })
            .catch(error => {
                // Handle any errors
                console.log(error)
            });
    }
     const showSearch=()=>{
        return searchdata;
     }
    // Function to add a search to history
    const addSearch = async (text) => {
        let raw = JSON.stringify({
            "userName": localStorage.getItem("user"),
            "searchText": text
        });
        let result = await fetch("http://localhost:9090/history", {
            method: 'post',
            body: raw,
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem("token")
            },
        });
    };


    // Function to add a song to the liked list
    const liked = async ({ artist, imgSrc, audioSrc, title }) => {
        let raw = JSON.stringify({
            "artist": artist,
            "imgsrc": imgSrc,
            "audioSrc": audioSrc,
            "title": title,
            "username": username
        });
        let result = await fetch("http://localhost:9090/song", {
            method: 'post',
            body: raw,
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem("token")
            },
        });
    };

    // Function to retrieve liked songs
    const getLiked = async () => {
        let result = await fetch(`http://localhost:9090/getsongs/${username}`, {
            headers: { authorization: localStorage.getItem("token") }
        });
        result = await result.json();
        
        setlike(result);
        
        
    };
    const deleteLiked = async (srcs) => {
        
       
        let result = await fetch(`http://localhost:9090/deletesong/shiv/${srcs}`, {
            method: 'delete',
            headers: { authorization: localStorage.getItem("token") }
        });
        
       
    };
    const PlaySearch=(data)=>{
        const { artistName, trackName, artworkUrl100, previewUrl } = data
        music.pause();
        music.currentTime = 0;
        const nextMusic = new Audio(previewUrl);
        setMusic(nextMusic);
        setIsPlaying(true);
        nextMusic.play();
        const tempSongInfo = { 'artist': artistName, 'imgSrc':artworkUrl100, 'title': trackName };
        setRecent([...recent, tempSongInfo]);
        console.log(recent);
        setSongInfo(tempSongInfo);
    }
    const LikeSearch=async(data)=>{
        const { artistName, trackName,artworkUrl100, previewUrl } = data;
        
        let raw = JSON.stringify({
            "artist": artistName,
            "imgsrc": artworkUrl100,
            "audioSrc": previewUrl,
            "title": trackName,
            "username": username
        });
        let result = await fetch("http://localhost:9090/song", {
            method: 'post',
            body: raw,
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem("token")
            },
        });
    }

    return (
        // Provide the music context to the child components
        <MusicContext.Provider value={{ handlePlay, searcher, getMusic, addSearch, liked, 
        handleNextSong, handlePreviousSong, getLiked, playSong, returnInfo,showSearch,PlaySearch,
        LikeSearch,RecentSongs,deleteLiked,SendLike,playLib}}>
            {props.children}
        </MusicContext.Provider>
    );
};


