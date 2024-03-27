import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
// import HeroSection from './components/HeroSection/HeroSection';
import { Outlet } from 'react-router-dom';
import { fetchNewAlbums, fetchTopAlbums, fetchAllSongs } from './api/api';
import { StyledEngineProvider } from '@mui/material';

function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return {...prevState, [key]: data};
      });
    });
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchAllSongs);
  }, []);

  const { topAlbums=[], newAlbums=[], songs=[] } = data;

  return (
    <>
    <StyledEngineProvider>
      <Navbar/>
      <Outlet context={{data: { topAlbums, newAlbums, songs}}} />
     </StyledEngineProvider>
    </>
  );
}

export default App;
