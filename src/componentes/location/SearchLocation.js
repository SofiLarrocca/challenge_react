import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ShowDataLocation from '../location/ShowDataLocation'
import '../../css/search.css'


const SearchLocation = () => {

    const [location, setLocation] = useState ([])
    const [search, setSearch] = useState ('')

    const URL = 'https://rickandmortyapi.com/api/character'

    const renderDataLocation = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            setLocation(data.results)
    }  

    
    useEffect( ()=> {
        renderDataLocation()
      }, [search])

    const seacher = (e) => { 
        setSearch(e.target.value.toUpperCase())
    }

    let resultado = []

    if (search === "") { 
        resultado = location
    } else { 
        resultado = location.filter ((e)=> (e.location.name.toUpperCase().includes(search)));
        console.log (resultado)
    }

    

      return (
        <>
          <div className='input'>
            <label>Buscar por Ubicación:
              <input value={search} onChange = {seacher}></input>
            </label>
            <Link className='link' to = '/'>INICIO</Link>
          </div>
          <ShowDataLocation resultado={resultado}></ShowDataLocation>
    </>
      )
}
    export default SearchLocation;