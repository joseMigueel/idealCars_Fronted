import React, { useState } from 'react';

const AdForm = () => {
    const [ adData, setAdData ] = useState({
        nombre: '',
        description: '',
        precio: '',
    });

    const inputChange = (event) => {
        const { name, value } = event.target;
        setAdData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const  submitAd = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={submitAd}>
                <input
                type="text"
                name="nombre"
                placeholder="Ad nombre"
                value={adData.nombre}
                onChange={inputChange}
                required
                />
                <textarea
                name="description"
                value={adData.description}
                onChange={inputChange}
                required/>
                <input
                type="number"
                name="precio"
                placeholder='Precio'
                value={adData.precio}
                onChange={inputChange}
                required
                />
                <button type='submit'>Create Ad</button>
            </form>
        </div>
    );
};

export default AdForm;