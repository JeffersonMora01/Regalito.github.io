import React, { useState } from 'react';
import { Tooltip } from 'antd';
import DataRompeCabezas from './Data/DataRompeCabezas';
import Swal from 'sweetalert2'


const Rompecabezas = () => {

    const Cabezas = DataRompeCabezas();
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
    const [casillaSeleccionada, setCasillaSeleccionada] = useState(null);
    const [habilitado, setHabilitado] = useState(true);
    const [color, setColor] = useState('text-white bg-gray-600');
    const [color2, setColor2] = useState('');
    const [contador, setContador] = useState(0);

    const [color3, setColor3] = useState('text-white bg-gray-600');

    const selecionarOpcion = (index) => {
        setOpcionSeleccionada(index);
        setColor('text-white bg-pink-500');
        setColor3('text-white bg-green-500');
        setColor2('border border-blue-500 border-4')
        setHabilitado(false);

    };

    const selecionarCasilla = (index) => {
        console.log(index);

        if (opcionSeleccionada == null) {
            alert('seleccione una opcion')
        }
        else {
            setCasillaSeleccionada(index);
            RevisarAcierto(index);

        }
    };

    const RevisarAcierto = (index) => {
        if (opcionSeleccionada == index) {
            
            setColor('text-white bg-gray-500');
            setColor3('text-white bg-gray-500');
            setColor2('')
            setHabilitado(true);
            setContador(contador + 1);

            Swal.fire({
                title: "Felicidades Amor",
                text: 'Encontraste una foto correcta',
                width: 600,
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
                padding: "3em",
                color: "#716add",
               
            });
        }
        else {
            Swal.fire({
                title: "Casi Amor",
                text: 'Esa No Es Una Foto Correcta',
                width: 600,
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
                padding: "3em",
                color: "#716add",
               
            });
        }

        if(contador === 16){
            Swal.fire({
                title: "Felicidades Amor",
                text: 'Lograste ganar el juego',
                width: 600,
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
                padding: "3em",
                color: "#716add",
               
            });
        }
    }

    const Pista = (pista) => {
        Swal.fire({
            title: "Tu Pista Es..",
            text: pista,
            width: 600,
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: false,
            padding: "3em",
            color: "#716add",
           
        });
    }


    const filas = [];
    for (let i = 0; i < Cabezas.length; i += 4) {
        filas.push(Cabezas.slice(i, i + 4));
    }

    return (

        <div className='flex flex-col lg:flex-row p-4 items-center justify-center h-screen gap-2'>
            <div id='tablero' className="relative w-full lg:w-1/2 h-1/2 border border-gray-500 border-4 rounded-lg flex flex-col lg:flex-row p-1 gap-1">

                {filas.map((fila, index) => (

                    <div key={index} className=' w-full flex flex-row lg:flex-col gap-2 lg:w-1/3 h-1/3 lg:h-full  p-2'>

                        {fila.map((cabeza) => (
                            <div key={cabeza.id} className='bg-gray-500 rounded w-1/3 lg:w-full h-full lg:h-1/3 flex gap-2 justify-center items-center'>
                                <Tooltip placement="top" title="Ver Pista">
                                    <button disabled={habilitado} className={`shadow-lg ${color} rounded-full p-2 flex `} onClick={() => Pista(cabeza.texto)}>
                                        <ion-icon name="heart"></ion-icon>
                                    </button>
                                </Tooltip>
                                <Tooltip placement="top" title="Seleccionar">
                                    <button disabled={habilitado} className={`shadow-lg ${color3}  rounded-full p-2 flex `} onClick={() => selecionarCasilla(cabeza.id)}>
                                        <ion-icon name="heart"></ion-icon>
                                    </button>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                ))}


            </div>

            <div className="overflow-x-auto flex flex-wrap w-full lg:w-1/2 h-1/2 items-center justify-center border border-gray-500 border-4 rounded-lg flex flex-row p-1 gap-1">
                <div className='w-full min-h-full bg-gray-300 flex flex-wrap overflow-auto gap-2 p-3 items-center justify-center'>
                    {Cabezas.map((cabeza) => (

                        <img key={cabeza.id}
                            className={`bg-cover  rounded w-64 h-64 flex items-center justify-center
                          ${opcionSeleccionada === cabeza.id ? color2 : ''
                                }`} src={cabeza.imagen}
                            onClick={() => selecionarOpcion(cabeza.id)}
                            alt="" />
                    ))}
                </div>
            </div>
        </div>
    )

};

export default Rompecabezas;
