import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABout me</span>
        <img src="https://media.istockphoto.com/photos/space-background-wiht-stars-stock-image-picture-id1287901429?b=1&k=20&m=1287901429&s=170667a&w=0&h=RH6-KPEq-WYftCxoKnQixr8SOwyHlWr8F8EfloDmTxg=" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eaque soluta et architecto ad saepe. In minima minus tempora id tempore totam consequatur consectetur ipsam. Eius vel aspernatur quia esse!</p>
      </div>
      <div className="sidebarIt">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className='link' to='/posts?cat=Music'>
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className='link' to='/posts?cat=sport'>
              sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className='link' to='/posts?cat=Tech'>
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className='link' to='/posts?cat=cinema'>
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Foolow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar