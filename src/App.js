import { useEffect } from "react";
import Home from "./componentes/Home";
import SearchCharacter from "./componentes/character/SearchCharacter";
import SearchLocation from "./componentes/location/SearchLocation";
import SearchEpisode from "./componentes/episode/SearchEpisode";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

   return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<Home />} />
          <Route path='/searchCharacter' element = {<SearchCharacter />} />
          <Route path='/searchLocation' element = {<SearchLocation />} />
          <Route path='/searchEpisode' element = {<SearchEpisode />} />
          <Route path='/searchEpisode/:id' element = {<SearchEpisode />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
