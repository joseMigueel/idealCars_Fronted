import React, { useState } from 'react';
import '../style/AdForm.css'

const AdForm = ({ onAddAd }) => {
    const [ adData, setAdData ] = useState({
        name: '',
        model: '',
        color: '',
        year: 2020,
        price: '',
        kilometer: 0,
        image: '',
        owner: ''
    });

    const inputChange = (bar) => {
        const { name, value, type } = bar.target;
        setAdData(prev => ({
            ...prev,
            [name]: type === 'range' || type === 'number' ? Number(value) : value
        }));
    };

    const submitAd = (event) => {
        event.preventDefault();
        onAddAd(adData);
        alert('¡Anuncio creado correctamente!');
        setAdData({
            name: '',
            model: '',
            color: '',
            year: 2020,
            price: '',
            kilometer: 0,
            image: ''
        });
    };

    return (
        <div className='ad-container'>
            <form onSubmit={submitAd} className='ad-form'>
                <input
                type="text"
                name="name"
                placeholder="Nombre del coche"
                value={adData.name}
                onChange={inputChange}
                required
                />
                <input type="text"
                name='model'
                placeholder='Modelo'
                value={adData.model}
                onChange={inputChange}
                required/>
                <input
                type="text"
                name='color'
                placeholder='Color'
                value={adData.color}
                onChange={inputChange}
                required/>
                <input
                type="number"
                name="price"
                placeholder='Precio (€)'
                value={adData.price}
                min="0"
                max="80000"
                onChange={inputChange}
                required
                />
                <input
                type="number"
                name='year'
                placeholder='Año'
                value={adData.year}
                min='1980'
                max='2024'
                onChange={inputChange}
                required
                />
                <label htmlFor="kilometer">kilometros:</label>
                <input
                type="range"
                id='kilometer'
                name='kilometer'
                min='0'
                max='500000'
                step='1000'
                value={adData.kilometer}
                onChange={inputChange}
                />
                <p className='km'>{adData.kilometer.toLocaleString()}km</p>
                <input
                type="file"
                name='image'
                accept='image/*'
                //Con esta funcion detecta al usuario que subio una imagen, leera el contenido para guardarla.
                onChange={(photo => {
                    const file = photo.target.files[0];
                    if(file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setAdData((prev) => ({
                                ...prev,
                                image: reader.result
                            }));
                        };
                        reader.readAsDataURL(file);
                    }
                })}
                />
                <input
                type="text"
                name='owner'
                placeholder='Nombre del vendedor'
                value={adData.owner}
                onChange={inputChange}/>
                {/* (Apuntes:)Lo que vamos hacer ahora es para mostrar la imagen si ya se nos cargo la imagen*/}
                {adData.image && (
                    <div className='img_prev'>
                        <p>Vista previa</p>
                        <img src={adData.image} alt="Vista previa" />
                    </div>
                )}
                <button type='submit' className='adSubmit'>Create Anuncio</button>
            </form>
        </div>
    );
};

export default AdForm;