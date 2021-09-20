import { useState } from 'react';





const Item = ({lalista}) => {

     const [contador, setCount] = useState(1)
     const restar = () => {
        if(contador <= 1){

        } else {
            setCount(contador -1)
        }
    }
    const sumar = () => {
        if(contador > lalista.stock -1 ){

        } else {
            setCount(contador +1)
        }
    }
    


    return   (  

                <div className="cardText col-sm-6">
                    <div className="card card text-center" >
                        <div className="card-body">
                            <h5 className="card-title">{lalista?.name}</h5>
                            <div>
                            <img src={lalista?.img} alt="Imagen Ilustrativa"  style={{width :'100%'}}/>
                            </div>  
                            <p className="card-text">{lalista?.description}</p>
                            <p className="card-text">{lalista?.precio}</p>
                            <div className="btnDiv">
                            <button className="btn btn-secondary btnMargin" onClick={sumar} >+</button>
                            <h6 className=" btnMargin">{contador}</h6>
                            <button className="btn btn-secondary btnMargin" onClick={restar} >-</button>
                            </div>
                            <div className="row btnDiv">
                            <button className="btn btn-danger cardText col-sm-6 " style={{color: 'white'}}>Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default Item;

