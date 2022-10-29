import React, {useState, useEffect} from 'react'
import ShowDataCharacter from './ShowDataCharacter'
import { Link } from 'react-router-dom'


const SearchCharacter = () => {

    const [character, setCharacter] = useState ([])
    const [search, setSearch] = useState ('')

    const URL = 'https://rickandmortyapi.com/api/character'

    const renderDataCharacter = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setCharacter(data.results)
        }   
   
    
    useEffect( ()=> {
        renderDataCharacter()
      }, [search])

    const seacher = (e) => { 
        setSearch(e.target.value.toUpperCase())
    }

    let resultado = []

    if (search === "") { 
        resultado = character
    } else { 
        resultado = character.filter ((e)=> (e.name.toUpperCase().includes(search)));
    }

 

      return (
        <>
            <div className='input'>
                <label>Buscar por Personajes:
                    <input value={search} onChange = {seacher}></input>
                </label>
            <Link className='link' to = '/'>INICIO</Link>
            </div>
            <ShowDataCharacter resultado={resultado}></ShowDataCharacter>
        </>
      )
}
    export default SearchCharacter;