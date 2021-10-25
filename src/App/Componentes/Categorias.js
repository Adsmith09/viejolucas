import styled from 'styled-components'
import { categorias } from '../../data'
import CategoriasItem from './CategoriasItem'
import { medida1, medida2, medida3, medida4, medida5, medida6, medida7} from '../../responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${medida1({padding:"0px", flexDirection: "column"})};
    ${medida2({padding:"0px", flexDirection: "column"})};
    ${medida3({padding:"0px", flexDirection: "column"})};
    ${medida4({padding:"0px", flexDirection: "column"})};
    ${medida5({padding:"0px", flexDirection: "column"})};
    ${medida6({padding:"0px", flexDirection: "column"})};
    ${medida7({padding:"0px", flexDirection: "column"})};
`

export default function Categorias() {
    return (
        <Container>
            {categorias.map(item=>(
                <CategoriasItem item={item} key={item.id}>

                </CategoriasItem>
            ))}
        </Container>
    )
}
