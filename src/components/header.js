import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar">
      <Link className="link" to="#about_us">О нас</Link>
      <Link className="link" to="#our_team">Команда</Link>
      <Link className="link" to="#master_class">Мастер-классы и курсы</Link>
      <Link className="link" to="#contact">Связаться с нами</Link>
      <Link className="link" to="/">Art party</Link>
    </div>
  </header>
)


export default Header
