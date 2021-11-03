import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { medida1 } from '../../responsive'

const itemCarrito = (item, delFromCart) => {
    
    const Producto = styled.div`
    display: flex;  
    justify-content: space-between;
    padding: 2px;
    ${medida1({flexDirection:"column"})};
`
const ProductoDetalle = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
     width: 200px;
`
const Detalle = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
const NombreProducto = styled.span`
    
`

const PrecioDetalle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const CantidadProductoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;    
`
const CantidadProducto = styled.div`
    font-size: 24px;
    margin: 5px;
    ${medida1({margin:"5px 15px"})};
`
const PrecioProducto = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${medida1({marginBottom:"20px"})};
`
    return (
        <div>
            <Producto>
                <ProductoDetalle>
                    <Image src={item.imagen} />
                    <Detalle>
                        <NombreProducto><b>Producto: </b> {item.nombre}</NombreProducto>
                    </Detalle>
                </ProductoDetalle>
                <PrecioDetalle>
                    <CantidadProductoContainer>
                        <Add />
                        <CantidadProducto>2</CantidadProducto>
                        <Remove />
                    </CantidadProductoContainer>
                    <PrecioProducto>S/{item.precio}</PrecioProducto>
                    <button>Eliminar</button>
                </PrecioDetalle>
            </Producto>
        </div>
    )
}

export default itemCarrito
