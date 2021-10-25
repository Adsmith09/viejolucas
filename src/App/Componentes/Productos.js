
import styled from "styled-components"
import useFetch from '../hooks/useFetch';
import Producto from "./Producto"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Productos = () => {
        const{datos:listarProductos} = useFetch('/producto');

    return (
        <Container>
            {listarProductos.map(listarProductos=>(
                <Producto listarProductos={listarProductos} key={listarProductos.id}/>
            ))}
        </Container>
    )
}
export default Productos;
