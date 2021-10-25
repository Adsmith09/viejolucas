import styled from "styled-components"
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7} from '../../responsive'
import { Link } from "react-router-dom"

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${medida1({height:"30vh"})};
    ${medida2({height:"30vh"})};
    ${medida3({height:"30vh"})};
    ${medida4({height:"30vh"})};
    ${medida5({height:"30vh"})};
    ${medida6({height:"30vh"})};
    ${medida7({height:"30vh"})};
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

export default function CategoriasItem({item}) {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button><Link to="/Carta" style={{color: 'inherit', textDecoration:'inherit'}}>COMPRAR AHORA</Link></Button>
            </Info>
        </Container>
    )
}
