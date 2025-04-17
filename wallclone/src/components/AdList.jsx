import React from 'react';
import '../style/adList.css'



const AdList = ({ ads, onDeleteAd }) => {
    if (ads.length === 0) return null;

    return (
        <div className='adList'>
            <div className='adGrid'>
            {ads.map((ad, index) => (
                <div key={index} className='adCard'>
                    <button className='deleteButton' onClick={() => onDeleteAd(index)} title='eliminar anuncio'>
                        x
                    </button>
                    <h3>{ad.name} ({ad.model})</h3>
                    <p><strong>Color:</strong> {ad.color}</p>
                    <p><strong>Año:</strong> {ad.year}</p>
                    <p><strong>Precio:</strong> {ad.price} €</p>
                    <p><strong>Kilómetros:</strong> {ad.kilometer.toLocaleString()} km</p>
                    <p><strong>Vendedor:</strong> {ad.owner}</p>
                    {ad.image && (
                        <img src={ad.image} alt="Imagen del anuncio" />
                    )}
                </div>
            ))}
            </div>
        </div>
    )
}

export default AdList