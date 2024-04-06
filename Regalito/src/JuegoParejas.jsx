import React, { useState, useEffect } from 'react';
import { Transfer } from 'antd';
import Swal from 'sweetalert2'

const disneyFrases = [
    { key: '10', title: "¡Vive o muere, tú eliges!", value: 2 },
    { key: '6', title: "¡Hasta la vista, baby!", value: 2 },
    { key: '1', title: "Hakuna Matata, vive y sé feliz", value: 1 },
    { key: '7', title: "Que la fuerza te acompañe", value: 2 },
    { key: '2', title: "La magia está en ti", value: 1 },
    { key: '4', title: "Nunca es tarde para ser valiente", value: 1 },
    { key: '8', title: "Houston, tenemos un problema", value: 2 },
    { key: '5', title: "La risa es atemporal, la imaginación no tiene edad y los sueños son para siempre", value: 1 },
    { key: '9', title: "Mi precioso", value: 2 },
    { key: '3', title: "Haz un deseo y tu sueño se hará realidad", value: 1 },

];

const initialTargetKeys = disneyFrases.filter((item) => Number(item.key) > 5).map((item) => item.key);

const JuegoParejas = () => {
    const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [aciertos, setAciertos] = useState(0);
    const [errores, setErrores] = useState(0);
    const [disneySelectedOptions, setDisneySelectedOptions] = useState([]);
    const [hollywoodSelectedOptions, setHollywoodSelectedOptions] = useState([]);

    const onChange = (nextTargetKeys, direction, moveKeys) => {
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const handleComprobar = () => {
        const disneyOptions = disneyFrases.filter(item => !targetKeys.includes(item.key));
        const hollywoodOptions = disneyFrases.filter(item => targetKeys.includes(item.key));

        setDisneySelectedOptions(disneyOptions);
        setHollywoodSelectedOptions(hollywoodOptions);

        console.log('Opciones seleccionadas en DISNEY:', disneyOptions);
        console.log('Opciones seleccionadas en HOLLYWOOD:', hollywoodOptions);

        marcador(disneyOptions, hollywoodOptions);
    };

    const marcador = (dataDisney, dataHollywood) => {
        setAciertos(0);
        setErrores(0);

        setAciertos(prevAciertos => prevAciertos + dataDisney.filter(item => item.value === 1).length + dataHollywood.filter(item => item.value === 2).length);
        setErrores(prevErrores => prevErrores + dataDisney.filter(item => item.value === 2).length + dataHollywood.filter(item => item.value === 1).length);
    };

    useEffect(() => {
        if (aciertos === 10) {
            Swal.fire({
                title: "FELICIDADES AMOR LOGRASTE COMPLETAR LAS FRASES ♥♥♥♥♥♥",
                width: 600,
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
                padding: "3em",
                color: "#716add",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://i.gifer.com/Hdpk.gif")
                  no-repeat center center / cover fixed
                `
              });

              
        }
    }, [aciertos]);

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <button className='bg-green-400 text-white p-2 text-2xl rounded m-4' onClick={handleComprobar}>Comprobar</button>
            <p>ACIERTOS: {aciertos} </p>
            <p>ERRORES: {errores}</p>

            <Transfer
                dataSource={disneyFrases}
                titles={['DISNEY', 'HOLLYWOOD']}
                className='flex flex-col lg:flex-row'
                listStyle={{ height: '400px', width: '400px' }}
                operations={['HOLLYWOOD', 'DISNEY']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={onChange}
                onSelectChange={onSelectChange}
                render={(item) => item.title}
            />
        </div>
    );
};

export default JuegoParejas;