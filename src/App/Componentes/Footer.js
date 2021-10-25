import { Link as Linka } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Room, WhatsApp } from "@material-ui/icons"
import styled from "styled-components"
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7} from '../../responsive'

const Container = styled.div`
    display: flex;
    ${medida1({fireDirection:"column"})};
    ${medida2({fireDirection:"column"})};
    ${medida3({fireDirection:"column"})};
    ${medida4({fireDirection:"column"})};
    ${medida5({fireDirection:"column"})};
    ${medida6({fireDirection:"column"})};
    ${medida7({fireDirection:"column"})};
    margin-top: 20px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
`
const Logo = styled.img`
    display:block;
    margin: auto;
    width: 28%;
    padding-bottom:20px;
`
const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${medida1({display:"none"})};
    ${medida2({display:"none"})};
    ${medida3({display:"none"})};
    ${medida4({display:"none"})};
    ${medida5({display:"none"})};
    ${medida6({display:"none"})};
    ${medida7({display:"none"})};
`
const  Title= styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
const Rigth = styled.div`
    flex: 1;
    padding: 20px;
    ${medida1({backgroundColor:"#fff8f8"})};
    ${medida2({backgroundColor:"#fff8f8"})};
    ${medida3({backgroundColor:"#fff8f8"})};
    ${medida4({backgroundColor:"#fff8f8"})};
    ${medida5({backgroundColor:"#fff8f8"})};
    ${medida6({backgroundColor:"#fff8f8"})};
    ${medida7({backgroundColor:"#fff8f8"})};
`
const ConctactoItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`



export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo src="https://i.ibb.co/zm3s95z/logo-viejolucas.png"/>
                <SocialContainer>
                    <Linka href="https://www.facebook.com/ElviejoLucasBurgers" target="_blank"><SocialIcon color="385999">
                    <Facebook />
                    </SocialIcon>
                    </Linka>
                    <Linka href="https://www.instagram.com/_elviejolucas/" target="_blank">
                    <SocialIcon color="E440E5">
                    <Instagram/>
                    </SocialIcon>
                    </Linka>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Enlaces Útiles</Title>
                <List>
                    <ListItem><Link  to="/" style={{color: 'inherit', textDecoration:'inherit'}}>Inicio</Link></ListItem>
                    <ListItem>Carrito</ListItem>
                    <ListItem>Mi cuenta</ListItem>
                    <ListItem>Seguimiento de Pedido</ListItem>
                    <ListItem>Terminos y Condiciones</ListItem>
                </List>
            </Center>
            <Rigth>
                <Title>Contacto</Title>
                <ConctactoItem>
                <Room style={{marginRight:"10px"}}/> Cayalti 14721, Perú
                </ConctactoItem>
                <ConctactoItem>
                <WhatsApp style={{marginRight:"10px"}}/> 
                <Linka style={{ color: 'inherit', textDecoration: 'inherit'}} href="https://web.whatsapp.com/send?phone=51942724313" target="_blank">+51942724313</Linka>
                </ConctactoItem>
            </Rigth>
        </Container>
    )
}
