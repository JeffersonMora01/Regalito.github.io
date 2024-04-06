import React from 'react'
import Rompecabezas from './Rompecabezas'
import CancionText from './CancionText'
import { Divider } from 'antd'
import JuegoParejas from './JuegoParejas'
import GaleriaFotos from './GaleriaFotos'
import Carta from './Carta'
import Crucigrama from './Crucigrama'
import SopaDeLetras from './Crucigrama'

const Regalo = () => {
    return (
        <>
            <Divider>Rompecabezas amoroso</Divider>
            <Rompecabezas />
            <Divider>Historias con Melodia</Divider>
            <CancionText />
            <Divider>Juego Frases</Divider>
            <JuegoParejas />
            <Divider>Sopa de letras</Divider>
            <SopaDeLetras/>
            <Divider>Galeria de fotos</Divider>
            <GaleriaFotos />
            <Divider>Carta al amor de mi vida</Divider>
            <Carta/>
        </>

    )
}

export default Regalo