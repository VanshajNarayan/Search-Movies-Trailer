import movieTrailer from 'movie-trailer';
import React, { useState } from 'react'
import ReactPlayer from 'react-player';

export const SearchMovies5 = () => {
  const [video, setVideo] = useState();
  const [videoURL, SetVideoURL] = useState();

  const handleSearch = () => {
    movieTrailer(video).then((res) => { SetVideoURL(res) });
  }

  return (
    <div>
      <div className="searchBox">
        <h1>SEARCH MOVIES AND SHOW </h1>
        <label> Search Any Movies/Show </label>
        <input type="text" onChange={(event) => {setVideo(event.target.value)}} />
        <button onClick={() => {handleSearch()}} >Search</button>
      </div>
      <ReactPlayer url={videoURL} controls = {true} />
    </div>
  )
};
