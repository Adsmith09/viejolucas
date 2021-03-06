import { useState } from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7, medida8 } from '../../responsive'
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
    width: 60%;
    height: 50%;
    padding: 20px;
    background-color: white;
    ${medida1({ height: "85%" })};
    ${medida2({ height: "85%" })};
    ${medida3({ height: "85%" })};
    ${medida4({ height: "85%" })};
    ${medida5({ height: "85%" })};
    ${medida6({ height: "85%" })};
    ${medida7({ height: "85%" })};
    ${medida8({ height: "85%" })};
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
    width: 80%;
    max-width: 400px;
    margin: 20px 190px 0 0;
    padding: 10px;
    /* padding-right: 120px; */
`
const Campo = styled.div`
  /* margin: 20px 58px 20px 0px; */
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const ButtonR = styled.button`
    width: 40%;
    border: none;
    padding: 15px;
    background-color:  #af5d4a;
    color : white;
    cursor: pointer;
`
const Error = styled.p`
  font-size: 11px;
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
    contrase??a: '',
    vigencia: 1,
    idRol: 1,
  });
  const [errores, setErrores] = useState({
    eNombres: '',
    eApellidos: '',
    eCorreo: '',
    eTelefono: '',
    eUsuario: '',
    eContrase??a: ''
  });

  const handleChangeCliente = (event) => {
    const { target: { name, value } } = event;
    switch (name) {
      case "nombres":
        if (vNombres.test(value)) {
          setCliente((previoCliente) => {
            return {
              ...previoCliente,
              [name]: value,
            }
          });
          console.log("Nombres valido")
          setErrores({ ...errores, eNombres: '' });
        } else {
          console.log("Nombres Inv??lidos")
          setErrores({ ...errores, eNombres: 'Este campo no acepta caracteres especiales ni n??meros' });
          console.log(errores);
        }
        break;
      case "apellidos":
        if (vApellidos.test(value)) {
          setCliente((previoCliente) => {
            return {
              ...previoCliente,
              [name]: value,
            }
          });
          console.log(" Apellido valido")
          setErrores({ ...errores, eApellidos: '' });
        } else {
          console.log(" Apellido Invalido")
          setErrores({ ...errores, eApellidos: 'Este campo no acepta caracteres especiales ni n??meros' });
          console.log(errores);
        }
        break;

      case "correo":
        if (vCorreo.test(value)) {
          setCliente((previoCliente) => {
            return {
              ...previoCliente,
              [name]: value,
            }
          });
          setErrores({ ...errores, eCorreo: '' });
          console.log("Correo valido")
        } else {
          console.log("Correo Invalido")
          setErrores({ ...errores, eCorreo: 'Correo Inv??lido' });
          console.log(errores);
        }
        break;

      case "telefono":
        if (vTelefono.test(value)) {
          //setCliente({...cliente,[name]:value}); 
          setCliente((previoCliente) => {
            return {
              ...previoCliente,
              [name]: value,
            }
          });
          setErrores({ ...errores, eTelefono: '' });
          console.log("N??mero valido")
        } else {
          console.log("N??mero Invalido")
          setErrores({ ...errores, eTelefono: 'El n??mero ingresado debe ser de 9 d??gitos' });
          console.log(errores);
        }
        break;
      default:
        break;


    }

    setCliente((previoCliente) => {
      return {
        ...previoCliente,
        [name]: value,
      }
    });
    console.log(cliente)
  }


  const handleChangeUsuario = (event) => {
    const { target: { name, value } } = event;
    switch (name) {
      case "usuario":
        if (vUsuario.test(value)) {
          setUsuario({ ...usuarioo, [name]: value });
          setErrores({ ...errores, eUsuario: '' });
          console.log("Usuario valido")
        } else {
          console.log("Usuario Invalido")
          setErrores({ ...errores, eUsuario: 'Este campo no acepta espacios y debe contener de 1 a 16 caracteres' });
          console.log(errores);
        }
        break;

      case "contrase??a":
        if (vContrase??a.test(value)) {
          setUsuario({ ...usuarioo, [name]: value });
          console.log("Contrase??a v??lida")
          setErrores({ ...errores, eContrase??a: '' });
        } else {
          console.log("Contrase??a Inv??lido")
          setErrores({ ...errores, eContrase??a: 'La contrase??a debe contener de 4 a 12 caracteres' });
          console.log(errores);
        }
        break;
      default:
        break;
    }

    setUsuario((previoUsuario) => {
      return {
        ...previoUsuario,
        [name]: value,
      }
    });
    console.log(usuarioo);
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
        alert("Cliente y Usuario Registrado");
        // localStorage.setItem("user-info",JSON.stringify(nuevoUsuario))
        history.push("/");
      }

    } catch (error) {
      console.log(error.message);
      alert("Error al agregar");
    }
  }
  const history = useHistory();
  const vNombres = RegExp(/^[a-zA-Z??-??\s]{1,100}$/);
  const vApellidos = RegExp(/^[a-zA-Z??-??\s]{1,100}$/);
  const vCorreo = RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  const vTelefono = RegExp(/^\d{9}$/);
  const vUsuario = RegExp(/^[a-zA-Z0-9_-]{1,16}$/);
  const vContrase??a = RegExp(/^.{4,20}$/);


  return (

    <Container>
      <div><Button onClick={() => history.goBack()}> <ArrowBackIcon /> </Button></div>
      <Wrapper>
        <Title> CREAR CUENTA</Title>
        <Form onSubmit={handleSubmit}>
          <Campo>
            <Input placeholder="Nombres" name="nombres"
              value={cliente.nombres}
              type='text'
              minLength='1'
              maxLength='100'
              onChange={handleChangeCliente}
              required=""
              onKeyUp={handleChangeCliente}
              onBlur={handleChangeCliente}
            />
            <Error>{errores.eNombres}</Error>
          </Campo>
          <Campo>
            <Input placeholder="Apellidos" name="apellidos"
              value={cliente.apellidos}
              type='text'
              minLength='1'
              maxLength='100'
              onChange={handleChangeCliente}
              required=""
              onKeyUp={handleChangeCliente}
              onBlur={handleChangeCliente} />
              <Error>{errores.eApellidos}</Error>
          </Campo>
          <Campo>
            <Input placeholder="Correo electr??nico" name="correo"
              type='email'
              value={cliente.correo}
              onChange={handleChangeCliente}
              required=""
              onKeyUp={handleChangeCliente}
              onBlur={handleChangeCliente} />
              <Error>{errores.eCorreo}</Error>
          </Campo>
          <Campo>
            <Input placeholder="Telefono" name="telefono"
              value={cliente.telefono}
              onChange={handleChangeCliente}
              type='text'
              // minLength='9'
              maxLength='9'
              onKeyUp={handleChangeCliente}
              onBlur={handleChangeCliente}
            />
            <Error>{errores.eTelefono}</Error>
          </Campo>
          <Campo>
            <Input placeholder="Usuario" name="usuario"
              value={usuarioo.usuario}
              type='text'
              maxLength='16'
              onChange={handleChangeUsuario}
              required=""
              onKeyUp={handleChangeUsuario}
              onBlur={handleChangeUsuario} />
              <Error>{errores.eUsuario}</Error>
          </Campo>
          <Campo>
            <Input placeholder="Contrase??a" name="contrase??a"
              type='password'
              minLength='4'
              maxLength='20'
              value={usuarioo.contrase??a}
              onChange={handleChangeUsuario}
              required=""
              onKeyUp={handleChangeUsuario}
              onBlur={handleChangeUsuario} />
              <Error>{errores.eCorreo}</Error>
          </Campo>
          {/* <Input placeholder="Confirmaci??n de Contrase??a" name="ccontrase??a"
                        //value={usuarioo.contrase??a}
                        onChange={handleChangeUsuario}
                        required="" /> */}
          <Agreement>
            Al crear una cuenta, doy mi consentimiento
            para el procesamiento de mis datos personales de acuerdo con la <b>pol??tica de privacidad </b>
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