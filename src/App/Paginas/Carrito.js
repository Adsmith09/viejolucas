import React, { useReducer } from 'react'
import Navbar from '../Componentes/Navbar'
import Anuncio from '../Componentes/Anuncio'
import Footer from '../Componentes/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7 } from '../../responsive'
import { carritoInitialState, carritoReducer } from '../Componentes/carritoReducer'
import itemCarrito from '../Componentes/itemCarrito'

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
    border:${props => props.type === "filled" && "none"};
    background-color:${props => props.type === "filled" ? "black" : "transparent"};
    color:${props => props.type === "filled" && "white"};
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

// const Producto = styled.div`
//     display: flex;  
//     justify-content: space-between;
//     padding: 2px;
//     ${medida1({flexDirection:"column"})};
// `
// const ProductoDetalle = styled.div`
//     flex: 2;
//     display: flex;
// `
// const Image = styled.img`
//      width: 200px;
// `
// const Detalle = styled.div`
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;

// `
// const NombreProducto = styled.span`

// `

// const PrecioDetalle = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

// `
// const CantidadProductoContainer = styled.div`
//     display: flex;
//     align-items: center;
//     margin-bottom: 20px;    
// `
// const CantidadProducto = styled.div`
//     font-size: 24px;
//     margin: 5px;
//     ${medida1({margin:"5px 15px"})};
// `
// const PrecioProducto = styled.div`
//     font-size: 30px;
//     font-weight: 200;
//     ${medida1({marginBottom:"20px"})};
// `
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
    background-color: black;
    color: white;
    font-weight: 600;
`

export default function Carrito() {
    // const [carrito, setcarrito] = useState({})

    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

    const { carrito } = state;

    const delFromCart = () => {

    }

    const clearCart = () => {

    }
    return (
        <Container>
            <Anuncio />
            <Navbar />
            <Wrapper>
                <Title>TU CARRITO</Title>
                <Top>
                    <TopButton>CONTINUAR COMPRANDO</TopButton>
                    <TopTexts>
                        <TopText>Bolsa de Compra(2)</TopText>
                    </TopTexts>
                    <TopButton type="filled">PAGAR AHORA</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {/* {state.carrito.map((item, index) =>(<itemCarrito key = {index} data={item} delFromCart={delFromCart}/>))} */}
                        {
                            window.onload = function () {
                                const storage = JSON.parse(localStorage.getItem('carrito'));
                                if (storage) {
                                    carrito = storage;
                                    state.carrito.map((item) => (
                                        <itemCarrito item={item} key={item.id} />
                                    ))
                                }
                            }
                        }
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>RESUMEN DE ORDEN</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SUBTOTAL</SummaryItemText>
                            <SummaryItemPrice>S/ 20</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>PRECIO DE ENVÍO</SummaryItemText>
                            <SummaryItemPrice>S/ 4</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >TOTAL</SummaryItemText>
                            <SummaryItemPrice>S/ 24</SummaryItemPrice>
                        </SummaryItem>
                        <Button>PAGAR AHORA</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
