import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ShowDataEpisode from './ShowDataEpisode'


const SearchEpisode = () => {

    const [episode, setCharacter] = useState ([])
    const [search, setSearch] = useState ('')

    const URL = 'https://rickandmortyapi.com/api/character'

    const renderDataEpisode = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setCharacter(data.results)
    }   
   
    
    useEffect( ()=> {
        renderDataEpisode()
      }, [search])

    const seacher = (e) => { 
        setSearch(e.target.value.toUpperCase())
    }

    let resultado = []

    if (search === "") { 
        resultado = episode
    } else { 
        resultado = episode.filter((e) => e.episode.find((e)=> e.toUpperCase().includes(search)))
    }

      return (
        <>
            <div className='input'>
                <label>Buscar por Episodios:
                    <input value={search} onChange = {seacher}></input>
                </label>
            <Link className='link' to = '/'>INICIO</Link>
            </div>
            <ShowDataEpisode resultado={resultado}></ShowDataEpisode>
        </>
      )
}
    export default SearchEpisode;