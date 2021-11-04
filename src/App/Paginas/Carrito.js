import React, { useState } from 'react'
import Navbar from '../Componentes/Navbar'
import Anuncio from '../Componentes/Anuncio'
import Footer from '../Componentes/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7 } from '../../responsive'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
    ${medida1({ padding: "10px" })};
    ${medida2({ padding: "10px" })};
    ${medida3({ padding: "10px" })};
    ${medida4({ padding: "10px" })};
    ${medida5({ padding: "10px" })};
    ${medida6({ padding: "10px" })};
    ${medida7({ padding: "10px" })};
`
const Title = styled.h1`
    font-weight: 300;
    color: #0509FF;
    font-family:'Trebuchet MS';
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    color: #0509FF;
    border-color:#FFC300;
    border:${props => props.type === "filled" && "none"};
    background-color:${props => props.type === "filled" ? "#0509FF" : "transparent"};
    color:${props => props.type === "filled" && "yellow"};
`
const TopTexts = styled.div`
    ${medida1({ display: "none" })};
    ${medida2({ display: "none" })};
    ${medida3({ display: "none" })};
    ${medida4({ display: "none" })};
    ${medida5({ display: "none" })};
    ${medida6({ display: "none" })};
    ${medida7({ display: "none" })};
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between; 
    ${medida1({ flexDirection: "column" })};
`
const Info = styled.div`
    flex: 3; 
`

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
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    bottom: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color:#0509FF ;
    color: #FFC300;
    font-weight: 600;
`
const ButtonC = styled.button`
    width: 60%;
    background-color: transparent;
    border-style:none;
    cursor: pointer;
`

export default function Carrito() {
    const carrito = useSelector(state => state.carrito);
    const cantidad = useSelector(state => state.carrito.cantidad);
    // const [cantidadC, setCantidadC] = useState(1);
    // const dispatch = useDispatch();
    // const handleCantidad = (tipo) =>{
    //     if(tipo ==="dis"){
            
    //         cantidadC > 1 && setCantidadC(cantidadC-1);
    //         dispatch({ ...carrito.producto, cantidad});
    //     }else{
    //         setCantidadC(cantidadC+1);
    //         dispatch({ ...carrito.producto, cantidad});
    //     }
    // }


    return (
        <Container>
            <Anuncio />
            <Navbar />
            <Wrapper>
                <Title>TU CARRITO</Title>
                <Top>
                    <Link to='/Carta'><TopButton >CONTINUAR COMPRANDO</TopButton></Link>
                    <TopTexts>
                        <TopText>Bolsa de Compra({cantidad})</TopText>
                    </TopTexts>
                    <TopButton type="filled">PAGAR AHORA</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {carrito.productos.map(producto=>(
                        <Producto>
                            <ProductoDetalle>
                                <Image src={producto.imagen}/>
                                <Detalle>
                                    <NombreProducto><b style={{color: '#0509FF'}}>Producto: </b> {producto.nombre}</NombreProducto>
                                </Detalle>
                            </ProductoDetalle>
                            <PrecioDetalle>
                                <CantidadProductoContainer>
                                    <ButtonC  ><Add /></ButtonC>
                                    <CantidadProducto>{producto.cantidad}</CantidadProducto>
                                    <ButtonC ><Remove /></ButtonC>
                                </CantidadProductoContainer>
                                <PrecioProducto>S/ {producto.precio * producto.cantidad}</PrecioProducto>
                            </PrecioDetalle>
                        </Producto>
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>RESUMEN DE ORDEN</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SUBTOTAL</SummaryItemText>
                            <SummaryItemPrice>S/ {carrito.total} </SummaryItemPrice>
                        </SummaryItem>
                        {/* <SummaryItem>
                            <SummaryItemText>PRECIO DE ENVÍO</SummaryItemText>
                            <SummaryItemPrice>S/ 4</SummaryItemPrice>
                        </SummaryItem> */}
                        <SummaryItem type="total">
                            <SummaryItemText >TOTAL</SummaryItemText>
                            <SummaryItemPrice>S/ {carrito.total} </SummaryItemPrice>
                        </SummaryItem>
                        <Button>PAGAR AHORA</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
