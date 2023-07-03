import React from "react";
// import GetData from './Data';
import './index.css';

class Success extends React.Component {
    render() {
        return(
            <div>
                <div className="card" style={{backgroundColor:"white",width: "700px",height:"500px",margin:"100px 300px",fontSize:"1.8vw"}}>
                <div style={{textAlign:"center",width:"1000px"}} className="card-body">
                    <img style={{height:"200px"}} src="https://i.imgur.com/MnpWxVi.png" alt="success"/>
                    <h1 className="card-title">Payment Successful!!!</h1>
                    {/* <GetData/> */}
            <table className="table" id="finaltotal" style={{textAlign:"left"}}>
            <thead>
            <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>Exploring the Hills and Lakes of Lonavala</td>
            <td>2</td>
            <td><b>39210 INR</b></td>
            </tr>
            
            </tbody>
            </table>
                    <a href="/" className="btn btn-success" >Go To Home</a>
                </div>
                </div>
                
            </div>
        );
    }
}



  export default Success;
  