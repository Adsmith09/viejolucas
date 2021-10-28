import React, { Component } from 'react';
import styled from 'styled-components';

import '../Assets/BurgerStyle.css';

export default class Burger extends Component {


    state = {
        carne: 0,
        queso: 0,
        huevo: 0,
        platanoFrito: 0,
        jamon: 0,
        piña: 0,
        tocino: 0,
        salcHuachana: 0,
        lechuga: 0,
        tomate: 0,
    }

    cremas = {
        mermeladaTocino: 0,
        mayonesa: 0,
        mostaza: 0,
        aji: 0,
        ketchup: 0,
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            carne,
            queso,
            huevo,
            platanoFrito,
            jamon,
            piña,
            tocino,
            salcHuachana,
            lechuga,
            tomate,
        } = this.state;
        let stateValue;
        switch (ingredient) {
            case 'carne': {
                stateValue = carne;
                break;
            }
            case 'queso': {
                stateValue = queso;
                break;
            }
            case 'huevo': {
                stateValue = huevo;
                break;
            }
            case 'platanoFrito': {
                stateValue = platanoFrito;
                break;
            }
            case 'jamon': {
                stateValue = jamon;
                break;
            }
            case 'piña': {
                stateValue = piña;
                break;
            }
            case 'tocino': {
                stateValue = tocino;
                break;
            }
            case 'salcHuachana': {
                stateValue = salcHuachana;
                break;
            }
            case 'lechuga': {
                stateValue = lechuga;
                break;
            }
            case 'tomate': {
                stateValue = tomate;
                break;
            }
            default: break;
        }
        if (action === 'add') {
            stateValue = stateValue + 1;
        } else {
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = () => {
        let {
            carne,
            queso,
            huevo,
            platanoFrito,
            jamon,
            piña,
            tocino,
            salcHuachana,
            lechuga,
            tomate,
        } = this.state;
        let burger = [];



        // salcHuachana
        for (let i = 0; i < salcHuachana; i++) {
            burger.push(<div key={burger.length} className="salcHuachanaSide"></div>);
        }
        //Tocino
        for (let i = 0; i < tocino; i++) {
            burger.push(<div key={burger.length} className="tocinoSide"></div>);
        }
        //Piña
        for (let i = 0; i < piña; i++) {
            burger.push(<div key={burger.length} className="piñaSide"></div>);
        }
        //Jamon
        for (let i = 0; i < jamon; i++) {
            burger.push(<div key={burger.length} className="jamonSide"></div>);
        }
        //Platano Frito
        for (let i = 0; i < platanoFrito; i++) {
            burger.push(<div key={burger.length} className="platanoFritoSide"></div>);
        }
        //Huevo
        for (let i = 0; i < huevo; i++) {
            burger.push(<div key={burger.length} className="huevoSide"></div>);
        }
        // queso
        for (let i = 0; i < queso; i++) {
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        // carne
        for (let i = 0; i < carne; i++) {
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        // tomate
        for (let i = 0; i < tomate; i++) {
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        // lechuga
        for (let i = 0; i < lechuga; i++) {
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        if (burger.length === 0)
            burger.push(<p key="0">¡Empiece a añadir ingredientes!</p>);
        return burger;
    }

    render() {
        const InputN = styled.input`
        width: 45%;
        max-width: 45%;
        padding: 10px;
        position: relative;
        display: block;
        margin: 0 auto;
        border-color: #FFC300;
        outline-color: #FFC300;
        
        &:hover{
            border-color: #0509FF;
            outline-color: #0509FF;
        }
`

        const InputC = styled.input`
`
        const Contenedor = styled.div`
            display: flex;
    /* justify-content: space-between; */
    align-items: center;
        `

        const Left = styled.div`
        flex: 1;
        display: flex;
        display: inline-block;
        
        `
        const Center = styled.div`
        flex: 1;
        text-align: center;
        align-content: center;
        `
        const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        display: inline-block;
        
        `

        // const AgregarCarrito = styled.div`
        // position: relative;
        // display: block;
        // margin: 0 auto;
        // `
        const ButtonC = styled.button`
        padding: 15px;
        border: 1px solid transparent;
        border-radius: 15px;
        background-color: #f4b46c;
        cursor: pointer;
        background-color: #FFC300;
    &:hover{
        color: white;
        background-color: #0509FF;
    }

        position: relative;
        display: block;
        margin: 0 auto;
        
    `

        return (
            <Contenedor>
                <Left>
                    <div className="burgerIngredients" style={{ marginBottom: '20px' }}>
                        <div className="topSide"></div>
                        {this.burgerContent()}
                        <div className="bottomSide"></div>
                    </div >
                    
                    <InputN placeholder="Ingrese Nombre de su Hamburguesa Personalizada" name="nombre" />
                    
                </Left>
                <Center>
                <div className="ingredientsBlock">
                    <p>Lechuga</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'lechuga')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'lechuga')}>Quitar</button>
                    </div>
                    <p>Tomate</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'tomate')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'tomate')}>Quitar</button>
                    </div>
                    <p>Salchicha Huachana</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'salcHuachana')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'salcHuachana')}>Quitar</button>
                    </div>
                    <p>Tocino</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'tocino')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'tocino')}>Quitar</button>
                    </div>
                    <p>Piña</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'piña')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'piña')}>Quitar</button>
                    </div>
                    <p>Jamon</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'jamon')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'jamon')}>Quitar</button>
                    </div>
                    <p>Platano Frito</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'platanoFrito')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'platanoFrito')}>Quitar</button>
                    </div>
                    <p>Huevo</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'huevo')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'huevo')}>Quitar</button>
                    </div>
                    <p>Queso</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'queso')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'queso')}>Quitar</button>
                    </div>
                    <p>Carne</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'carne')}>Agregar</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'carne')}>Quitar</button>
                    </div>
                </div>
                </Center>
                <Right>
                <div className="adicionales">
                    <p>Seleccione Adicionales:</p>
                    <div className="cremasCheck">
                        <InputC type="checkbox" name="mTocino" value="mermeladaTocino" />Mermelada de Tocino
                    </div>
                    <div className="cremasCheck">
                        <InputC type="checkbox" name="mayonesa" value="mayonesa" />Mayonesa
                    </div>
                    <div className="cremasCheck">
                        <InputC type="checkbox" name="ketchup" value="ketchup" />Ketchup
                    </div>
                    <div className="cremasCheck">
                        <InputC type="checkbox" name="mostaza" value="mostaza" />Mostaza
                    </div>
                    <div className="cremasCheck">
                        <InputC type="checkbox" name="aji" value="aji" />Aji
                    </div>
                </div>
                <ButtonC>
                    Agregar al Carrito
                </ButtonC>
                </Right>
            </Contenedor>
        );
    }
}
