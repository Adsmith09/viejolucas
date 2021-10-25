import React from 'react'
import Anuncio from '../Componentes/Anuncio'
import BoletinInfo from '../Componentes/BoletinInfo'
import Categorias from '../Componentes/Categorias'
import Footer from '../Componentes/Footer'
import Navbar from '../Componentes/Navbar'
import Productos from '../Componentes/Productos'
import Slider from '../Componentes/Slider'

export default function Home() {
    return (
        <div>
            <React.Fragment>
                <Anuncio />
                <Navbar />
                <Slider />
                <Categorias />
                <Productos />
                <BoletinInfo />
                <Footer />
            </React.Fragment>
        </div>
    )
}
