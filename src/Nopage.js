import React from "react";
import {Link} from 'react-router-dom';
import './index.css';

class NoPage extends React.Component {
    render() {
        return(
            <div id="seeanddo" className="container-fluid">
            <figure className="textover">
                    <img src="https://i.imgur.com/RfyVF7f.jpg" alt="snd"></img>
                    <figcaption><strong>PAGE NOT FOUND</strong><Link to="/"><p>Go to Home</p></Link></figcaption>
                    </figure>
                    <div id="endofpage"></div>
                </div>
          );
    }
}



  export default NoPage;
  