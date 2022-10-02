import '../css/home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
          <h1 className='home-title'>API RICK AND MORTY</h1>
          <div className='container-home'>
            <Link to = '/searchCharacter'><button>BUSCAR POR PERSONAJES</button></Link>
            <Link to = '/searchLocation'><button>BUSCAR POR UBICACIÓN</button></Link>
            <Link to = '/searchEpisode'><button>BUSCAR POR EPISODIOSS</button></Link>
          </div>
    </>
      )
}
    export default Home;