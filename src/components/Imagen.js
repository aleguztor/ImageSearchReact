import React from 'react';

const Imagen=(props)=>{
    const{largeImageURL, likes, previewURL, tags, views} =props.imagen;
    return(
         

        <div className='imagenes'>
            <div className='carta'>
                <img src={previewURL} alt={tags} className='imagen'></img>
                <p className='p'>{likes} ME GUSTA</p>
                <p className='views'>{views} VISTAS</p>
                <a href={largeImageURL}>Ver imagen</a>
            </div>
        </div>
    );
}
export default Imagen;