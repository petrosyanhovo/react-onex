import React from 'react'
import "./NavBar.css"
const NavBar = ({navBarShow}) => {
  return (
    <>
        <nav className="nav">
            <a href="#">Ներմուծում</a>
            <a href="#">Արտահանում</a>
            <a href="#">Կորպորատիվ</a>
            <a href="#">Մեծածախի հարցում</a>
            <a href="#">SMART Լուծումներ</a>
          </nav>
    </>
  )
}

export default NavBar