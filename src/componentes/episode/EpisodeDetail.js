import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import EpisodeContainer from './EpisodeContainer'
import '../../App.css'



const EpisodeDetail = () => {

    const {id} = useParams ()
    
    const [episodesURL, setEpisodesURL] = useState ([])
    const [characterName, setCharacterName] = useState ()

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res)=>res.json())
    .then((res)=>setCharacterName(res.name))

    useEffect( ()=> {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then ((res) => res.json())
        .then ((res) => setEpisodesURL(res.episode))
        .then ((res) => setCharacterName(res.name))
      }, [])

        return (
            <>
            <h2 className="titleCardEpisode">Episodios dónde participó: {characterName}</h2>
            <div className="containerDetailEpisode">
              {episodesURL.map((episode) => (
                <EpisodeContainer episodeURL={episode} key={episode.id}/>
              ))}
            </div>
            </>
          );
}

export default EpisodeDetail;



