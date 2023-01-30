import React, { useState } from 'react';
import  movieTrailer  from "movie-trailer";
import ReactPlayer from 'react-player';

export const SearchMovies4 = () => {
  const [video, setVideo] = useState();
  const [videoURL, setVideoURL] = useState("https://youtu.be/sa9l-dTv9Gk");
  
  const handleSearch = () => {
    movieTrailer(video)
      .then((res) => {
        setVideoURL(res);
      });
  }

  return (
    <div>
      <div className="searchmovies">
      <h1 style = {{color : "red", fontSize : "2rem", textTransform : "uppercase" }} >Seach Movies</h1>
        <label style={{color : "white", textTransform : "uppercase" }} >Search any movies and show</label>
        <input type="text" onChange={(event) => { setVideo(event.target.value) } } />
        <button onClick={() => {handleSearch()}} >Search</button>
      </div>
      <ReactPlayer url = {videoURL} controls = {true} />
    </div>
  )
};
