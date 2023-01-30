import React, { useState } from 'react';
import  movieTrailer  from "movie-trailer";
import ReactPlayer from 'react-player';

export const Searchmoveis6 = () => {
  const [video, setVideo] = useState();
  const [videoURL, SetVideoURL] = useState();
  const handleSearch = () => {
    movieTrailer(video).then((res) => { SetVideoURL(res) });
  }
  return (
    <div>
      <div className="searchMovies">
        <h1 style={{color : "red" }} >SearchMovies</h1>
        <label style={{color : "white" }} >Search Any Movies/ Show</label>
        <input type="text" onChange={(event) => {setVideo(event.target.value)} } />
        <button onClick={() => {handleSearch()}} >Search</button>
      </div>
      <ReactPlayer url={videoURL} controls = {true} />
    </div>
  )
};
