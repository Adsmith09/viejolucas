import styled from "styled-components"
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7} from '../../responsive'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// import { useState } from "react";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), 
                                rgba(255,255,255,0.5)
                                ), 
                                url("https://i.ibb.co/dmB53PS/fondo.jpg") center ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${medida1({width:"75%"})};
    ${medida2({width:"75%"})};
    ${medida3({width:"75%"})};
    ${medida4({width:"75%"})};
    ${medida5({width:"75%"})};
    ${medida6({width:"75%"})};
    ${medida7({width:"75%"})};
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;

`

const Input = styled.input`
    flex: 1;
    max-width: 90%;
    margin: 10px 0px;
    padding: 10px;
`
const ButtonL = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:  #af5d4a;
    color : white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

export default function InicioSesion() {
    const history = useHistory();
    // const [usuarioo, setUsuarioo] = useState({
    //     usuario:'',
    //     contraseña:'',
    // });

    // const [error, setError] = useState('');

    // const Login = (detalles)=>{
    //     console.log(detalles);
    // }

    // const Logout = ()=>{
    //     console.log("Logout");
    // }

    return (
        <Container>
           
            <div><Button onClick={()=> history.goBack()}> <ArrowBackIcon/> </Button></div>
            {/* {(usuarioo.usuario != "") ? (<>Bienvenido</>) : ( */}
            <Wrapper>
                <Title> Iniciar Sesion</Title>
                <Form>
                    
                    <Input type ="text" placeholder="Usuario"/>
                    <Input type="password" placeholder="Contraseña"/>
                    <ButtonL>
                        Iniciar Sesion
                    </ButtonL>
                    <Link> OLVIDO SU CONTRASEÑA? </Link>
                    <Link> CREAR CUENTA NUEVA </Link>
                </Form>
            </Wrapper>
            {/* )} */}
        </Container>
    )
}
