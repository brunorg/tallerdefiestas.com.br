import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = (props, { siteTitle }) => (
  <header id="header" style={props.timeout ? { display: "none" } : { marginBottom: `1.45rem` }}>
    <div className="logo">
      <span className="icon brigadeiro" />
    </div>
    <div className="content">
      <div className="inner" style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem` }}>
        <h1>{props.siteTitle}</h1>
        <p>Buffets à domicilio com opções variadas e comidas temáticas</p>
        <h3>Curta o momento com seus <span>convidados</span></h3>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/festas">Festas</Link>
        </li>
        <li>
          <Link to="/social">Depoimentos</Link>
        </li>
        <li>
          <Link to="/galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
