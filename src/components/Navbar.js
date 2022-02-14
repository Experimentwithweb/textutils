import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.info}</Link>
        </li>
        
  
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      */}
      <div className="form-check mx-4 form-switch text-{props.mode==='light'?'dark':'light'}" >
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" style={{color:props.mode==='light'?'black':'white'}} htmlFor="flexSwitchCheckDefault">Enable {(props.mode==='light'?'dark':'light')} mode</label>
        <button type="button" onClick={props.faintGreen} class="btn mx-2" style={{backgroundColor:'lightgreen'}}>LightGreen</button>
<button type="button" class="btn  mx-2" onClick={props.gray} style={{backgroundColor:'#808080'}}>Grey</button>
<button type="button" class="btn  mx-2" onClick={props.lightblue} style={{backgroundColor:'#B0E0E6'}}>LightBlue</button>
<button type="button" class="btn  mx-2" onClick={props.orangeBackground} style={{backgroundColor:'orange'}}>orange</button>
<button type="button" class="btn  mx-2" onClick={props.yellowbackground} style={{backgroundColor:'yellow'}}> Yellow</button>


</div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={
    name:PropTypes.string.isRequired,
    info :PropTypes.string.isRequired,
}

// Navbar.defaultProps = {
//     name: 'Stranger'
//   };