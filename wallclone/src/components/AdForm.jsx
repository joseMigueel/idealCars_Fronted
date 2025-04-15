import React, { useState } from 'react';
import '../style/AdForm.css'

const AdForm = () => {
    const [ adData, setAdData ] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        location: '',
        image: ''
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
        alert('¡Anuncio creado correctamente');
        setAdData({
            name: '',
            description: '',
            price: '',
            category: '',
            location: '',
            image: '',
        });
    };

    return (
        <div className='ad-container'>
            <form onSubmit={submitAd} className='ad-form'>
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
                value={adData.price}
                onChange={inputChange}
                required
                />
                <input
                type="text"
                name='category'
                placeholder='Category'
                value={adData.category}
                onChange={inputChange}
                />
                <input
                type="text"
                name='location'
                placeholder='Location'
                value={adData.location}
                onChange={inputChange}
                />
                <input
                type="text"
                name='image'
                placeholder='Image URL'
                value={adData.image}
                onChange={inputChange}/>
                <button type='submit' className='adSubmit'>Create Ad</button>
            </form>
        </div>
    );
};

export default AdForm;