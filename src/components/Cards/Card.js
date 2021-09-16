import { useState } from 'react';
import frazada from '../Carrousel/frazadas.svg'
import sabana from '../Carrousel/sabanas.svg'



let producto = ["Sabana","Sabana","Sabana"]




const Card = () => {
    
    

    // for (let i = 0; i < producto.length; i++) {
    //     console.log('asd');
    //   }


    const [contador, setCount] = useState(1)
    const restar = () => {
        if(contador <= 1){

        } else {
            setCount(contador -1)
        }
    }
    const sumar = () => {
        if(contador > producto.length -1 ){

        } else {
            setCount(contador +1)
        }
    }



return     <div className="row cardText col-sm-10">
                <div className="cardText col-sm-6">
                    <div className="card card text-center" >
                        <div className="card-body">
                            <h5 className="card-title">Sabana</h5>
                            <div>
                            <img src={sabana} alt="Imagen Ilustrativa"  style={{width :'100%'}}/>
                            </div>  
                            <p className="card-text">$1999,99</p>
                            <div className="btnDiv">
                            <button className="btn btn-secondary btnMargin" onClick={sumar}>+</button>
                            <h6 className=" btnMargin">{contador}</h6>
                            <button className="btn btn-secondary btnMargin" onClick={restar}>-</button>
                            </div>
                            <div className="row btnDiv">
                            <button className="btn btn-danger cardText col-sm-6 " style={{color: 'white'}}>Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardText col-sm-6">
                    <div className="card card text-center" >
                        <div className="card-body">
                            <h5 className="card-title">Frazada</h5>
                            <img src={frazada} alt="Imagen Ilustrativa" style={{width :'100%'}}/>
                            <p className="card-text">$3999,99</p>
                            <div className="btnDiv">
                            <button className="btn btn-secondary btnMargin">+</button>
                            <h6 className=" btnMargin">0</h6>
                            <button className="btn btn-secondary btnMargin">-</button>
                            </div>
                            <div className="row btnDiv">
                            <button className="btn btn-danger cardText col-sm-6 " style={{color: 'white'}}>Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


}

export default Card