import React from "react";
import './index.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <nav id="homenav" className="navbar navbar-fixed-top">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                  </button>
                
              <Link to="/" className="logo me-auto"><img src="https://img.icons8.com/wired/64/FFFFFF/airport.png" alt=""></img></Link>
              <h1 className="logo me-auto"><Link to="/">MAHARASHTRA<span>.</span></Link></h1>
              </div>
            <div className="container">
                <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/seeanddo">see and do</Link></li>
                <li><Link to="/eatanddrink">eat and drink</Link></li>
                <li><Link to="/festivalsandevents">festivals and events</Link></li>
                <li><Link to="/stay">stay</Link></li>
              </ul>
              <form className="navbar-form navbar-right">
                <div id="search" className="input-group">
                  <input type="text" className="form-control" placeholder="Search" name="search"></input>
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="glyphicon glyphicon-search"></i>
                      
                    </button>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </nav>
        );
    }
}



  export default Header;
  