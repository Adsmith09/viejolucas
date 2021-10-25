import {css} from "styled-components"

export const medida1 = (props) =>{
    return css`
        @media only screen and (max-width: 380px){
        ${props}
    }
    `;
}

export const medida2 = (props) =>{
    return css`
        @media only screen and (max-width: 640px){
        ${props}
    }
    `;
}

export const medida3 = (props) =>{
    return css`
        @media only screen and (max-width: 768px){
        ${props}
    }
    `;
}
export const medida4= (props) =>{
    return css`
        @media only screen and (max-width: 1080px){
        ${props}
    }
    `;
}
export const medida5 = (props) =>{
    return css`
        @media only screen and (max-width: 667px){
        ${props}
    }
    `;
}
export const medida6 = (props) =>{
    return css`
        @media only screen and (max-width: 900px){
        ${props}
    }
    `;
}
export const medida7 = (props) =>{
    return css`
        @media only screen and (max-width: 1024px){
        ${props}
    }
    `;
}
export const medida8 = (props) =>{
    return css`
        @media only screen and (max-width: 1280px){
        ${props}
    }
    `;
}
