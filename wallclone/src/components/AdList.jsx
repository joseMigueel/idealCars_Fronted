import React from 'react';



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
                    <h3>{ad.title}</h3>
                    <p>{ad.description}</p>
                    <p><strong>Precio:</strong> {ad.price} €</p>
                    <p><strong>Categoría:</strong> {ad.category}</p>
                    <p><strong>Ubicación:</strong> {ad.location}</p>
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