import styled from "styled-components"
import BoletinInfo from "../Componentes/BoletinInfo"
import Footer from "../Componentes/Footer"
import Navbar from "../Componentes/Navbar"
import Productos from "../Componentes/Productos"
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7} from '../../responsive'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    width:20%;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${medida1({width:"0px 20px", display: "flex", flexDirection:"column"})};
    ${medida2({width:"0px 20px", display: "flex", flexDirection:"column"})};
    ${medida3({width:"0px 20px", display: "flex", flexDirection:"column"})};
    ${medida4({width:"0px 20px", display: "flex", flexDirection:"column"})};
    ${medida5({width:"0px 20px", display: "flex", flexDirection:"column"})};
    ${medida6({width:"0px 20px", display: "flex", flexDirection:"column"})};
    ${medida7({width:"0px 20px", display: "flex", flexDirection:"column"})};
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${medida1({marginRight:"0px"})};
    ${medida2({marginRight:"0px"})};
    ${medida3({marginRight:"0px"})};
    ${medida4({marginRight:"0px"})};
    ${medida5({marginRight:"0px"})};
    ${medida6({marginRight:"0px"})};
    ${medida7({marginRight:"0px"})};
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${medida1({margin:"10px 0px"})};
    ${medida2({margin:"10px 0px"})};
    ${medida3({margin:"10px 0px"})};
    ${medida4({margin:"10px 0px"})};
    ${medida5({margin:"10px 0px"})};
    ${medida6({margin:"10px 0px"})};
    ${medida7({margin:"10px 0px"})};
` 
const Option = styled.option`

`

 export default function Carta() {
     return (
         <Container>
             <Navbar/>
             <Title> Hamburguesas</Title>
             <FilterContainer>
                 <Filter><FilterText>Filtro: </FilterText> </Filter>
                 <Select>
                     <Option selected>Precio ascendente</Option>
                     <Option>Precio descendente</Option>
                 </Select>
             </FilterContainer>
             <Productos/>
             <BoletinInfo/>
             <Footer/>
         </Container>
     )
 }
 