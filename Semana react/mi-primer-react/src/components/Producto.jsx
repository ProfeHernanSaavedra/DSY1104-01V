import Button  from "react-bootstrap/Button"

function Producto(props){

    return(
        <div>
            <h3>{props.nombre}</h3>
            <p>Precio: ${props.precio}</p>
            <Button class="primary" >Comprar</Button>
        </div>
    )

}

export default Producto