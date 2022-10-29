import { Link } from 'react-router-dom';
import '../../css/search.css'

const ShowDataEpisode = ({resultado}) => {

    return (
        <>
            <div className='grid-container'>
                {resultado.map ((e)=> ( 
                    <div className='grid-item' key = {e.id}>
                        <h1>{e.name}</h1>
                        <p>Episodio: {e.episode[Math.floor(Math.random() * e.episode.length)]}</p>
                        <Link to = {`/${e.id}`}>Más Info ➜ </Link> 
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShowDataEpisode;

