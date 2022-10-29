import { useEffect, useState } from "react";

export default function CharacterContainer({ charactersURL }) {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(charactersURL).then((data) => {
      data.json().then(setCharacter);
    });
  }, []);
  return (
    <>
      <h5>{character.name}</h5>
    </>
  );
}
