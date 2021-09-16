import { useState } from 'react';


let producto = ["Sabana","Sabana","Sabana"]




const Card = () => {
    
    

    // for (let i = 0; i < producto.length; i++) {
    //     console.log('asd');
    //   }


    const [contador, setCount] = useState(1)
console.log(producto);
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
                            <p className="card-text">$1999,99</p>
                            <div className="btnDiv">
                            <button className="btn btn-secondary btnMargin" onClick={sumar}>+</button>
                            <h6 className=" btnMargin">{contador}</h6>
                            <button className="btn btn-secondary btnMargin" onClick={restar}>-</button>
                            </div>
                            <div className="row">
                            <button className="btn btn-danger cardText ">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardText col-sm-6">
                    <div className="card card text-center" >
                        <div className="card-body">
                            <h5 className="card-title">Frazada</h5>
                            <p className="card-text">3999,99</p>
                            <div className="btnDiv">
                            <button className="btn btn-secondary btnMargin">+</button>
                            <h6 className=" btnMargin">0</h6>
                            <button className="btn btn-secondary btnMargin">-</button>
                            </div>
                            <div className="row">
                            <button className="btn btn-danger cardText ">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


}

export default Card