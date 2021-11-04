
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components"
import useFetch from '../hooks/useFetch';
import Producto from "./Producto"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Productos = ({categoria,cprecio}) => {
        const{datos:listarProductos} = useFetch('/producto');

        // const [productos, setProductos] = useState([]);

        // useEffect(()=>{
            
        // },[categoria])

    return (
        <Container>
            {listarProductos.map(listarProductos=>(
                <Producto listarProductos={listarProductos} key={listarProductos.id}/>
            ))}
        </Container>
    )
}
export default Productos;
