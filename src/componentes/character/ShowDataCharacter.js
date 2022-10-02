import '../../css/search.css'

const ShowDataCharacter = ({resultado}) => {

    //render dataCharacter
    return (
        <>
            <div className='grid-container'>
                {resultado.map ((e)=> ( 
                    <div className='grid-item' key = {e.id}>
                        <img className='img-card' src={e.image}></img>
                        <h1>{e.name}</h1>
                        <h3>Genero: {e.gender}</h3>
                        <h3>Ubicación: {e.location.name}</h3>
                        <a>Episodio: {e.episode[0]}</a>
                    </div>
                ))}
               
            </div>
        </>
    )
}

export default ShowDataCharacter;