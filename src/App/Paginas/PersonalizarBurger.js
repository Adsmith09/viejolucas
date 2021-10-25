import React from 'react'
import styled from 'styled-components'
import BoletinInfo from '../Componentes/BoletinInfo'
import Burger from '../Componentes/Burger'
import Footer from '../Componentes/Footer'
import Navbar from '../Componentes/Navbar'
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
    display: inline;
    color: #0509FF;
`
// const BurgerContainer = styled.div`
//     width: 100%;
//     max-width: 700px;
//     display: table;
//     margin: 5% auto 0;
    
// `


const PersonalizarBurger = () => {
    const history = useHistory();
    return (
        <Container>
            <Navbar/>
            <br/>
            <Button style={{color: 'blue'}} onClick={()=> history.goBack()}> <ArrowBackIcon/> </Button>
            <Title> Personalice su Hamburguesa</Title>
             {/* <BurgerContainer> */}
                <Burger/>
             {/* </BurgerContainer> */}
             <br/>
             <br/>
             
             <BoletinInfo/>
             <Footer/>
        </Container>
    )
}

export default PersonalizarBurger
