import '../../css/search.css'

const ShowDataLocation = ({resultado}) => {

    //render dataCharacter
    return (
        <>
            <div className='grid-container'>
                {resultado.map ((e)=> ( 
                    <div className='grid-item' key = {e.id}>
                        <h1>{e.name}</h1>
                        <h3>Ubicación: {e.location.name}</h3>
                        <h3>Especie: {e.species}</h3>
                        <h3>Fecha de creación: {e.created}</h3>
                    </div>
                ))}
               
            </div>
        </>
    )
}

export default ShowDataLocation;