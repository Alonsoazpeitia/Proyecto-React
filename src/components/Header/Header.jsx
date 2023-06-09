import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"
import { Icon } from '@iconify/react';


const Header = () => {
  return (
    <div className="header">
      <Link to="/" className='logo'>
        <h1>MiTienda</h1>
      </Link>
        <Icon className="lupa" icon="iconamoon:search-thin" />
        <Icon className='favorito' icon="uit:favorite" />
        <Icon className='usuario' icon="ph:user-circle-thin" />
        <div className="divBolsa">
          <Icon className='bolsa' icon="ph:bag-thin" />
          <span className='ConteoBolsa'>0</span>
        </div>
    </div>
  )
}

export default Header