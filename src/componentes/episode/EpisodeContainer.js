import { useEffect, useState } from "react";
import CharacterContainer from "../character/CharacterContainer";
import '../../css/home.css'




const EpisodeContainer = ({ episodeURL }) => {
  const [episode, setEpisode] = useState({});
  useEffect(() => {
    fetch(episodeURL).then((data) => {
      data.json().then(setEpisode);
    });
  }, []);
  return (
    <>
      <div className="cardEpisode">
      <h3 className="titleEpisode" key={episode.id}> EPISODIO: {episode.name}</h3>
        <h2>Personajes que participaron en episodio</h2>
        {episode.characters?.map((character) => (
          <CharacterContainer charactersURL={character} />
        ))}   
      </div>
    </>
  );
}

export default EpisodeContainer
