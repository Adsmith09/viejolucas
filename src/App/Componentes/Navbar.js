import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core'
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7, medida8} from '../../responsive'
import {Link} from 'react-router-dom'

const Container = styled.div`
    height : 80px;
    ${medida1({heigth:"50px"})};
    ${medida2({heigth:"50px"})};
    ${medida3({heigth:"50px"})};
    ${medida4({heigth:"50px"})};
    ${medida5({heigth:"50px"})};
    ${medida6({heigth:"50px"})};
    ${medida7({heigth:"50px"})};
    background-color: #FFC300 ;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${medida1({padding:"10px 0px"})};
    ${medida2({padding:"10px 0px"})};
    ${medida3({padding:"10px 0px"})};
    ${medida4({padding:"10px 0px"})};
    ${medida5({padding:"10px 0px"})};
    ${medida6({padding:"10px 0px"})};
    ${medida7({padding:"10px 0px"})};
    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    ${medida1({flex:1, justifyContent:"center"})};
    ${medida2({flex:1, justifyContent:"center"})};
    ${medida3({flex:1, justifyContent:"center"})};
    ${medida4({flex:1, justifyContent:"center"})};
    ${medida5({flex:1, justifyContent:"center"})};
    ${medida6({flex:1, justifyContent:"center"})};
    ${medida7({flex:1, justifyContent:"center"})};
    ${medida8({flex:1, justifyContent:"center"})};
`
// const Language = styled.span`
//     font-size: 14px;
//     cursor: pointer;
//     ${mobile({display:"none"})};
// `
// const SearchContainer = styled.div`
//     border: 0.5px solid lightgray;
//     display: flex;
//     align-items: center;
//     margin-left: 26px;
//     padding: 5px;
// `
// const Input = styled.input`
//     border: none;
//     ${mobile({width:"50px"})};
// `
const Logo = styled.h1`
    font-weight: bold;
    font-family:'Urbanist';
    ${medida1({fontSize:"24px"})};
    ${medida2({fontSize:"24px"})};
    ${medida3({fontSize:"24px"})};
    ${medida4({fontSize:"24px"})};
    ${medida5({fontSize:"24px"})};
    ${medida6({fontSize:"24px"})};
    ${medida7({fontSize:"24px"})};
    color: white;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    display: inline-block;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    ${medida1({flex:2, justifyContent:"center"})};
    ${medida2({flex:2, justifyContent:"center"})};
    ${medida3({flex:2, justifyContent:"center"})};
    ${medida4({flex:2, justifyContent:"center"})};
    ${medida5({flex:2, justifyContent:"center"})};
    ${medida6({flex:2, justifyContent:"center"})};
    ${medida7({flex:2, justifyContent:"center"})};
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${medida1({fontSize:"12px", marginLeft:"10px"})};
    ${medida2({fontSize:"12px", marginLeft:"10px"})};
    ${medida3({fontSize:"12px", marginLeft:"10px"})};
    ${medida4({fontSize:"12px", marginLeft:"10px"})};
    ${medida5({fontSize:"12px", marginLeft:"10px"})};
    ${medida6({fontSize:"12px", marginLeft:"10px"})};
    ${medida7({fontSize:"12px", marginLeft:"10px"})};
`
const LogoV = styled.img`
    width:15%;
    float: right;
    ${medida1({width:"30%"})};
    ${medida2({width:"30%"})};
    ${medida3({width:"30%"})};
    ${medida4({width:"25%"})};
    ${medida5({width:"30%"})};
    ${medida6({width:"30%"})};
    ${medida7({width:"30%"})};
`

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Language>
                        ES
                    </Language>
                    <SearchContainer placeholder="Search">
                        <Input />
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer> */}
                    <LogoV src="https://i.ibb.co/QKMwbHJ/logo2.png" />
                </Left>
               
                <Right>
                    <MenuItem><Link to="/Registro" style={{textDecoration:'inherit' , color:'white'}}>REGISTRARSE</Link></MenuItem>
                    <MenuItem><Link to="/InicioSesion" style={{textDecoration:'inherit', color:'white'}}>INICIAR SESIÓN</Link></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <FastfoodOutlinedIcon style={{fill:'white', fontSize: '28px'}}/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
