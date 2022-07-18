import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'
//import DropdownMenu from './DropdownMenu'

const Top = () => {
  return (
    <div className="navbar">
      <div>
        <a href="/">
          <img src='http://drive.google.com/uc?export=view&id=1EtxNPzJNR6KnaOFzbeYUlx0ZRROQWtQV' style={{height:"2rem", width:"auto"}} />
        </a>
      </div>
      <div className='search-place'>
        <input type="text" style={{width:"30vw"}} />
        <button className='search-button'>
          <a href="/search">
            <img src='http://drive.google.com/uc?export=view&id=1jhG6Q-jF-vwWYYdwSP40Kpmx0dmuc-3P' style={{height:"1.6rem", width:"auto"}} />
          </a>
        </button>
      </div>
      <div>
        <button><a href="/category">카테고리</a></button>
        <button>커뮤니티</button>
        <button><a href="/login">Login</a></button>
      </div>
    </div>
  )
}

export default Top