import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7} from '../../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #0509FF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 55px;
    margin: 20px;
    color: white ;
`
const Description = styled.div`
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
    color: white ;
    ${medida1({textAlign:"center"})}; 
    ${medida2({textAlign:"center"})}; 
    ${medida3({textAlign:"center"})}; 
    ${medida4({textAlign:"center"})}; 
    ${medida5({textAlign:"center"})}; 
    ${medida6({textAlign:"center"})}; 
    ${medida7({textAlign:"center"})}; 
`
const InputContainer = styled.div`
    width: 40%;
    height: 35px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${medida1({width:"80%"})};
    ${medida2({width:"80%"})};
    ${medida3({width:"80%"})};
    ${medida4({width:"80%"})};
    ${medida5({width:"80%"})};
    ${medida6({width:"80%"})};
    ${medida7({width:"80%"})};
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #FFC300;
    color: white;
`

export default function BoletinInfo() {
    return (
        <Container>
            <Title>InfoLucas</Title>
            <Description>Obten actualizaciones de nuestras promos y ofertas</Description>
            <InputContainer>
                <Input placeholder="Ingresa tu Correo electrónico"/>
                <Button>
                    <Send></Send>
                </Button>
            </InputContainer>
        </Container>
    )
}

