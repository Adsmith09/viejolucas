import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {sliderItems} from "../../data";
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7} from '../../responsive'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${medida1({display:"none"})};
    ${medida2({display:"none"})};
    ${medida3({display:"none"})};
    
 `
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;  
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
  
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  ${medida1({width:"50%"})};
  ${medida2({width:"50%"})};
  ${medida3({width:"50%"})};
  ${medida4({width:"50%"})};
  ${medida5({width:"50%"})};
  ${medida6({width:"50%"})};
  ${medida7({width:"50%"})};
`
const Image = styled.img`
    height: 80%;
    display: flex;
    ${medida1({width:"600px"})};
    ${medida2({width:"600px"})};
    ${medida3({width:"600px"})};
    ${medida4({width:"600px"})};
    ${medida5({width:"600px"})};
    ${medida6({width:"600px"})};
    ${medida7({width:"600px"})};
`
const InfoContainer = styled.div`
  flex: 5;
  padding: 50px;
  ${medida1({width:"50%"})};
  ${medida2({width:"50%"})};
  ${medida3({width:"50%"})};
  ${medida4({width:"50%"})};
  ${medida6({width:"50%"})};
  ${medida5({width:"50%"})};
  ${medida7({width:"40%"})};
`
const Title = styled.h1`
    font-size: 70px;
    color: #0509FF;
`
const Descripcion = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Urbanist', sans-serif;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color:  #FFC300;
    cursor: pointer;
    border-color: transparent;
    border-radius: 10px;
`

export default function Slider() {
    const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            setslideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else{
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    const history = useHistory();

    return (
        <Container>
            <Arrow direction="left" onClick={() =>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Descripcion>{item.descripcion}</Descripcion>
                        <Button onClick={()=> history.push('/PersonalizarBurger')}>CLICK AQUÍ</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() =>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}
