import React  from 'react';
import photo from '../photo.jpg'

export default function Header(){
    return (
        <div className='header'>
        <img src={photo} alt="logo" />
        </div>
    )
}