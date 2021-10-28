import { Link as Linka } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Room, WhatsApp } from "@material-ui/icons"
import styled from "styled-components"
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7 } from '../../responsive'

const Container = styled.div`
    display: flex;
    ${medida1({ fireDirection: "column" })};
    ${medida2({ fireDirection: "column" })};
    ${medida3({ fireDirection: "column" })};
    ${medida4({ fireDirection: "column" })};
    ${medida5({ fireDirection: "column" })};
    ${medida6({ fireDirection: "column" })};
    ${medida7({ fireDirection: "column" })};
    /* padding-top: 100px; */
    
    //margin-top: 80px;
    height: 310px;
    background-color: #FFC300;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.img`
    display:block;
    margin:0px auto;
    width:35%;
    padding-bottom:20px;
`
const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${medida1({ display: "none" })};
    ${medida2({ display: "none" })};
    ${medida3({ display: "none" })};
    ${medida4({ display: "none" })};
    ${medida5({ display: "none" })};
    ${medida6({ display: "none" })};
    ${medida7({ display: "none" })};
`
const Title = styled.h3`
    padding-bottom: 30px;
    color: black;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    //color: #0509FF;
`
const ListItem = styled.li`
    width: 50%;
    padding-top: 15px;
    cursor: pointer;
    color: black;
`
const Rigth = styled.div`
    flex: 1;
    /* padding: 20px; */
`
const ConctactoItem = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    color: black;
`
//const history = useHistory();


export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo src="https://i.ibb.co/zm3s95z/logo-viejolucas.png" />
                <SocialContainer>
                    <Linka href="https://www.facebook.com/ElviejoLucasBurgers" target="_blank" >
                        <Facebook style={{fill:'black', fontSize: '35px'}} />
                    </Linka>
                    <Linka href="https://www.instagram.com/_elviejolucas/" target="_blank">
                        <Instagram style={{fill:'black', fontSize: '35px'}} />
                    </Linka>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Enlaces Útiles</Title>
                <List>
                    <ListItem><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Inicio</Link></ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>Mi cuenta</ListItem>
                    <ListItem>Seguimiento de Pedido</ListItem>
                    <ListItem>Terminos y Condiciones</ListItem>
                </List>
            </Center>
            <Rigth>
                <Title>Contacto</Title>
                <ConctactoItem>
                    <Room style={{ marginRight: "10px" }} /> Cayalti 14721, Perú
                </ConctactoItem>
                <ConctactoItem>
                    <WhatsApp style={{ marginRight: "10px" }} />
                    <Linka style={{ color: 'inherit', textDecoration: 'inherit' }} href="https://web.whatsapp.com/send?phone=51942724313" target="_blank">+51942724313</Linka>
                </ConctactoItem>
            </Rigth>
        </Container>
    )
}
