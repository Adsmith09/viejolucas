// import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'
import Anuncio from '../Componentes/Anuncio'
// import BoletinInfo from '../Componentes/BoletinInfo'
import Footer from '../Componentes/Footer'
import Navbar from '../Componentes/Navbar'
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7 } from '../../responsive'
import { useParams, useHistory } from 'react-router-dom'
import { buscar } from '../../servicios/api';
import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { TYPES } from '../Componentes/carritoAction'
import { carritoInitialState, carritoReducer } from '../Componentes/carritoReducer'

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${medida1({ padding: "10px", flexDirection: "column" })};
    ${medida2({ padding: "10px", flexDirection: "column" })};
    ${medida3({ padding: "10px", flexDirection: "column" })};
    ${medida4({ padding: "10px", flexDirection: "column" })};
    ${medida5({ padding: "10px", flexDirection: "column" })};
    ${medida6({ padding: "10px", flexDirection: "column" })};
    ${medida7({ padding: "10px", flexDirection: "column" })};
`
const ImgContainer = styled.div`
    flex: 1;
    ${medida1({ padding: "10px" })};
    ${medida2({ padding: "10px" })};
    ${medida3({ padding: "10px" })};
    ${medida4({ padding: "10px" })};
    ${medida5({ padding: "10px" })};
    ${medida6({ padding: "10px" })};
    ${medida7({ padding: "10px" })};
`
const Image = styled.img`
    width: 80%;
    height: 60vh;
    object-fit: contain;
    ${medida1({ height: "40vh" })};
    ${medida2({ height: "40vh" })};
    ${medida3({ height: "40vh" })};
    ${medida4({ height: "40vh" })};
    ${medida5({ height: "40vh" })};
    ${medida6({ height: "40vh" })};
    ${medida7({ height: "40vh" })};
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: bold;
    color: blue;
`
const Descripcion = styled.p`
    margin:20px 0;
`
const Precio = styled.span`
    font-weight: 100;
    font-size: 35px;
    display: inline-block;
    margin: 5px 0 45px 0;
`
const AddContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;
    ${medida1({ width: "100%" })};
    ${medida2({ width: "100%" })};
    ${medida3({ width: "100%" })};
    ${medida4({ width: "100%" })};
    ${medida5({ width: "100%" })};
    ${medida6({ width: "100%" })};
    ${medida7({ width: "100%" })};
    margin: 70px 0 0 0;
`
// const AmountContainer = styled.div`
//     display: flex;
//     align-items: center;
//     font-weight: 700;
// `
// const Amount = styled.span`
//     width: 30px;
//     height: 30px;
//     border-radius: 10px;
//     border: 1px solid gray;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0px 5px;

// `
const ButtonC = styled.button`
    padding: 15px;
    margin-right: 5px;
    border: 1px solid transparent;
    border-radius: 15px;
    background-color: white;
    cursor: pointer;
    font-weight: 500; 
    background-color: #FFC300;
    &:hover{
        color: white;
        background-color: #0509FF;
    }
    
`
const InputC = styled.input`
`

const Adicionales = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`


const DetalleProducto = () => {

    const [producto, setProducto] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: '',
    });

    const { id } = useParams();
    //const history = useHistory();


    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const datos = await buscar('/producto', id);
                setProducto({
                    nombre: datos.nombre,
                    descripcion: datos.descripcion,
                    precio: datos.precio,
                    imagen: datos.imagen,
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchProducto();
    }, [id])

    // const [contador, setCount] = useState(1);
    const history = useHistory();
    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

    const addToCart = (id) => {
        console.log(id);
        dispatch({type:TYPES.ADD_TO_CART,payload:id});
    }

    return (

        <Container>
            <Anuncio />
            <Navbar />
            <Button onClick={() => history.goBack()}> <ArrowBackIcon style={{ fill: '#0509FF' }} /> </Button>
            <Wrapper key={producto.id}>
                <ImgContainer>
                    <Image src={producto.imagen}></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {producto.nombre}
                    </Title>
                    <Descripcion>
                        {producto.descripcion}
                    </Descripcion>
                    <Precio>
                        S/.  {producto.precio}
                    </Precio>
                    <div >
                        <p style={{ color: 'blue', fontFamily: 'Urbanist', fontWeight: 'bold' }}>Seleccione Adicionales:</p>
                        {/* <Adicionales>
                            <InputC type="checkbox" name="mTocino" value="mermeladaTocino" />Mermelada de Tocino
                        </Adicionales> */}
                        <Adicionales>
                            <InputC type="checkbox" name="mayonesa" value="mayonesa" />Mayonesa
                        </Adicionales>
                        <Adicionales>
                            <InputC type="checkbox" name="ketchup" value="ketchup" />Ketchup
                        </Adicionales>
                        <Adicionales>
                            <InputC type="checkbox" name="mostaza" value="mostaza" />Mostaza
                        </Adicionales>
                        <Adicionales>
                            <InputC type="checkbox" name="aji" value="aji" />Aji
                        </Adicionales>
                    </div>
                    <AddContainer>
                        {/* <AmountContainer>
                            <Button onClick={() => contador > 1 ? setCount(contador - 1) : contador}><Remove /></Button>
                            <Amount >{contador}</Amount>
                            <Button onClick={() => setCount(contador + 1)}><Add /></Button>
                        </AmountContainer> */}
                        <ButtonC onClick={() => addToCart(id)}>Agregar al Carrito</ButtonC>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            {/* <BoletinInfo /> */}
            <Footer />

        </Container>
    )
}

export default DetalleProducto;