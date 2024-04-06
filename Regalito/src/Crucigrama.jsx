import React, { useState } from 'react';
import Swal from 'sweetalert2'


const SopaDeLetras = () => {
    const [texto, setTexto] = useState('');
    const [palabras, setPalabras] = useState(['LIBRODELASELVA', 'RAUL', 'JOCOTE', 'BESO', 'ROSA']);


    const crearPalabra = (btn, letra) => {
        setTexto(prevTexto => prevTexto + letra);

        btn.classList.add('bg-blue-500');
    };

    const revisarPalabra = () => {
        const blueButtons = document.querySelectorAll('.bg-blue-500');

        console.log(texto)

       

        if (palabras.includes(texto)) {

            blueButtons.forEach(button => {
                button.classList.remove('bg-blue-500');
                button.classList.add('bg-red-300');
            });

            setTexto('');
            setPalabras(prevPalabras => prevPalabras.filter(palabra => palabra !== texto));

            if (palabras.length === 1) {
                Swal.fire({
                    title: "Felicidades",
                    text: 'Lograste Ganar La Sopa De Letras',
                    width: 600,
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    padding: "3em",
                    color: "#716add",
                   
                });
            }


        } else {

            blueButtons.forEach(button => {
                button.classList.remove('bg-blue-500');
            });

            setTexto('');

        }



    };


    return (
        
        <div className='h-screen flex flex-col gap-2 items-center justify-center'>
            <button onClick={revisarPalabra} className='bg-green-400 text-white p-2 rounded text-2xl font-semibold'>Revisar Palabra</button>

            <div className=' p-1  bg-gray-300 w-full lg:w-1/2 h-1/2'>
                
                <div className=' flex  w-full h-1/6'>
                    <button onClick={(e) => crearPalabra(e.target, 'L')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        L
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'U')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        U
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'A')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        A
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'R')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        R
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'S')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        S
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'H')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        H
                    </button>
                </div>

                <div className=' flex  w-full h-1/6'>
                    <button onClick={(e) => crearPalabra(e.target, 'I')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        I
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'K')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        K
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'J')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        J
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'O')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        O
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'B')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        B
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'R')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        R
                    </button>
                </div>

                <div className=' flex  w-full h-1/6'>
                    <button onClick={(e) => crearPalabra(e.target, 'B')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        B
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'R')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        R
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'A')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        A
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'S')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        S
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'E')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        E
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'L')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        L
                    </button>
                </div>

                <div className=' flex  w-full h-1/6'>
                    <button onClick={(e) => crearPalabra(e.target, 'R')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        R
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'P')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        P
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'L')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        L
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'A')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        A
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'S')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        S
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'V')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        V
                    </button>
                </div>

                <div className=' flex  w-full h-1/6'>
                    <button onClick={(e) => crearPalabra(e.target, 'O')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        O
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'D')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        D
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'E')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        E
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'M')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        M
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'O')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        O
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'A')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        A
                    </button>
                </div>

                <div className=' flex  w-full h-1/6'>
                    <button onClick={(e) => crearPalabra(e.target, 'J')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        J
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'O')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        O
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'C')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        C
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'O')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        O
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'T')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        T
                    </button>
                    <button onClick={(e) => crearPalabra(e.target, 'E')} className='border border-gray-500 h-full w-1/6 flex items-center  justify-center'>
                        E 
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SopaDeLetras;
