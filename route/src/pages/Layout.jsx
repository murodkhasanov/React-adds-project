import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faMessage, faNewspaper, faTags, faGear } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  return (
    <div className="Layout">
      <ul>
        <li className="litenow">
          <div className="icon1">
            <FontAwesomeIcon icon={faUserCheck} />
          </div>
          <h4>Subscribe</h4>
        </li>

        <div className="icon2">
          <FontAwesomeIcon icon={faTags} />
          <li>
            <Link to="/" className="a">Sale</Link>
          </li>
        </div>

        <div className="icon3">
          <FontAwesomeIcon icon={faNewspaper} />
          
          <li>
            <Link to="/news" className="a">News</Link>
          </li>
          </div>
       

        <div className="icon4">
          <FontAwesomeIcon icon={faMessage} />
        <li>
          <Link to="/nopage" className="a">Chat</Link>
        </li>
        </div>

        <div className="icon5">
          <FontAwesomeIcon icon={faGear} />
        
        <li>
          <Link to="/settings" className="a">Settings</Link>
        </li>
        </div>

      </ul>
      <Outlet />
    </div>

  )
}

export default Layout