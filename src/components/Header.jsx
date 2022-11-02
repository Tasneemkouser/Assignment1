import React, { useMemo } from 'react'
import logo from "../images/logo.png";

const menuItems = [
  'Covid 19',
  'Themes',
  'Investment Portfolio',
  'Special Focus Areas',
  'Learning Lab',
  'Data Visualization'
]

function Header() {

  const items = useMemo(() => menuItems.map(menu => menu.toUpperCase()), [menuItems])

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary py-0">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Covid19" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {items.map(menu => <li key={menu} className="nav-item" >
              <a className="nav-link text-capitalize" href="#">{menu}</a>
            </li>)}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header