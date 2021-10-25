import { useState } from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7 } from '../../responsive'
import { crear } from '../../servicios/api';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from "@material-ui/core";

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
    width: 40%;
    padding: 20px;
    background-color: white;
    ${medida1({ width: "75%" })};
    ${medida2({ width: "75%" })};
    ${medida3({ width: "75%" })};
    ${medida4({ width: "75%" })};
    ${medida5({ width: "75%" })};
    ${medida6({ width: "75%" })};
    ${medida7({ width: "75%" })};
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    max-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const ButtonR = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:  #af5d4a;
    color : white;
    cursor: pointer;
`

const Registro = () => {

  const [cliente, setCliente] = useState({
    nombres: '',
    apellidos: '',
    //        dni: '',
    correo: '',
    telefono: '',
    vigencia: 1,
  });

  const [usuarioo, setUsuario] = useState({
    usuario: '',
    contraseña: '',
    vigencia: 1,
    idRol: 1,
  });

  const handleChangeCliente = (event) => {
    const { target: { name, value } } = event;
    setCliente((previoCliente) => {
      return {
        ...previoCliente,
        [name]: value,
      }
    });
  }


  const handleChangeUsuario = (event) => {
    const { target: { name, value } } = event;
    setUsuario((previoUsuario) => {
      return {
        ...previoUsuario,
        [name]: value,
      }
    });
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (event.currentTarget.checkValidity()) {
        const { id } = await crear('/cliente', cliente);
        const nuevoUsuario = await crear('/usuario', {
          ...usuarioo,
          idCliente: id
        });
        // console.log(nuevoCliente);
        // alert("Cliente Registrado");
        console.log(nuevoUsuario);
        // alert("Usuario Registrado");
      }

    } catch (error) {
      console.log(error.message);
      alert("Error al agregar");
    }
  }
  const history = useHistory();

  return (

    <Container>
      <div><Button onClick={() => history.goBack()}> <ArrowBackIcon /> </Button></div>
      <Wrapper>
        <Title> CREAR CUENTA</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Nombres" name="nombres"
            value={cliente.nombres}
            onChange={handleChangeCliente}
            required="" />
          <Input placeholder="Apellidos" name="apellidos"
            value={cliente.apellidos}
            onChange={handleChangeCliente}
            required="" />
          <Input placeholder="Correo electrónico" name="correo"
            value={cliente.correo}
            onChange={handleChangeCliente}
            required="" />
          <Input placeholder="Telefono" name="telefono"
            value={cliente.telefono}
            onChange={handleChangeCliente}
          />
          <Input placeholder="Usuario" name="usuario"
            value={usuarioo.usuario}
            onChange={handleChangeUsuario}
            required="" />
          <Input placeholder="Contraseña" name="contraseña"
            value={usuarioo.contraseña}
            onChange={handleChangeUsuario}
            required="" />
          {/* <Input placeholder="Confirmación de Contraseña" name="ccontraseña"
                        //value={usuarioo.contraseña}
                        onChange={handleChangeUsuario}
                        required="" /> */}
          <Agreement>
            Al crear una cuenta, doy mi consentimiento
            para el procesamiento de mis datos personales de acuerdo con la <b>política de privacidad </b>
          </Agreement>
          <ButtonR>
            REGISTRARSE
          </ButtonR>
        </Form>
      </Wrapper>
    </Container>
  )
}
export default Registro;