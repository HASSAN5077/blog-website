import React from 'react'
const Topbar = () => {
  return (
    <div className='top'>
        <div className="topleft">
            <i className="topIcon fa-brands fa-facebook-f"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>write</li>
                <li>logout</li>
            </ul>
        </div>
        <div className="topright">
            <img src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topimg" />
            <i class="topsearchicon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar;