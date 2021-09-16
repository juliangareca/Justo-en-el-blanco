import carrito from './cart4.svg'

const BtnCarrito = () =>{

    return  <li className="nav-item">
                <button type="button" className="btn">

                    <img src={carrito} alt="jkashdasd"/> <span className="badge bg-secondary">0</span>
                </button>
            </li>
}

export default BtnCarrito