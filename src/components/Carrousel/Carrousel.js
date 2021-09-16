import frazada from './frazadas.svg'
import sabana from './sabanas.svg'
import toalla from './toallas.svg'


const Carrousel = () => {


return <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                <img src={frazada} className="d-block w-100 imgCarrousel" alt="frazadas"/>
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                <img src={sabana} className="d-block w-100 imgCarrousel" alt="sabanas"/>
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                <img src={toalla} className="d-block w-100 imgCarrousel" alt="toallas"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

}

export default Carrousel;
