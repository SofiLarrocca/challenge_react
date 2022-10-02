import { Link } from 'react-router-dom';
import '../../css/search.css'

const ShowDataEpisode = ({resultado}) => {
console.log (resultado)
 
    //render dataCharacter
    return (
        <>
            <div className='grid-container'>
                {resultado.map ((e)=> ( 
                    <div className='grid-item' key = {e.id}>
                        <h1>{e.name}</h1>
                        <a>Episodio: {e.episode[Math.floor(Math.random() * e.episode.length)]}</a>
                        <Link to = '/:id'>Más Info ➜ </Link>
                    </div>
                ))}
               
            </div>
        </>
    )
}

export default ShowDataEpisode;

