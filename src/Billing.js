import React from "react";
import './index.css';
import $ from "jquery";
import axios from 'axios';


class Billing extends React.Component {


  constructor(){
    super()
    this.state={
      firstName:'',
      email:'',
      mobileno:'',
      pincode:'',
      address:'',
      city:''
    }


    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeMobileno = this.changeMobileno.bind(this)
    this.changePin = this.changePin.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changeCity = this.changeCity.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeName(event){
    this.setState({
      firstName:event.target.value
    })
  }

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  changeMobileno(event){
    this.setState({
      mobileno:event.target.value
    })
  }

  changePin(event){
    this.setState({
      pincode:event.target.value
    })
  }

  changeAddress(event){
    this.setState({
      address:event.target.value
    })
  }

  changeCity(event){
    this.setState({
      city:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()
    const submitted = {
      firstName: this.state.firstName,
      email: this.state.email,
      mobileno: this.state.mobileno,
      pincode: this.state.pincode,
      address: this.state.address,
      city: this.state.city
    }

    axios.post('http://localhost:4000/billing',submitted)
    .then()

    alert("Submitted Successfully!!");
  }


    componentDidMount(){
         $("#btnShow").on("click",function(){
  
        $(".alert").hide().show('medium');
      });
    }

    render() {
        return(
            <div className="container">
                
            <div className="row">
            <section>
            <div className="wizard">
            <div className="wizard-inner">
            <ul className="nav  breadcrumb_checkout" role="tablist">
            <li role="presentation" className="active">
            <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
            <h3>Shipping</h3>
            </a>
            </li>
            <li role="presentation" className="">
            <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
            <h3>Payment</h3>
            </a>
            </li>
            <li role="presentation" className="">
            <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
            <h3>Confirmations</h3>
            </a>
            </li>
            </ul>
            </div>
            <form onSubmit={this.onSubmit}>
            <div className="tab-content">
            <div className="tab-pane active" role="tabpanel" id="step1">
            <div className="step1">


            <h3><strong>YOUR DETAILS</strong></h3>
            
            
            <div className="row">
            <div className="col-md-6">
              
            <label >First Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.changeName} value={this.state.firstName} placeholder="First Name"/><br/>
            <label >Email address</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.changeEmail} value={this.state.email} placeholder="Email"/><br/>
            <label >Mobile Number</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.changeMobileno} value={this.state.mobileno} placeholder="Mobile No"/>
            </div>
            <div className="col-md-6">
            <label >Pincode</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.changePin} value={this.state.pincode} placeholder="Pincode"/><br/>
            <label >Address</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.changeAddress} value={this.state.address} placeholder="Address"/><br/>
            <label >City</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.changeCity} value={this.state.city} placeholder="City"/>
            </div>
            </div>
            <br/>
            <input type="submit" className="btn btn-primary btn-block" value='submit'></input>
            <div className="wizard-inner">
            <ul className="nav" role="tablist">
            
            <li id="nextprev" role="presentation" className="">
            <br/><a href="#step2" type="button" className="btn btn-default" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
            <h3>Next</h3>
            </a>
            </li>
            
            </ul>
            </div>
            
            </div>
            <div id="seperator"></div>


            </div>
            <div className="tab-pane" role="tabpanel" id="step2">
            <div className="step2">    

            <div className="row">
            <div className="checkout_details">
            <div className="col-sm-6">
            <h3><strong>CONFIRM YOUR DETAILS</strong></h3>
            <div id="checkoutdetails">
            <dl className="dl-horizontal">
            <dt>First Name:<span></span></dt>
            <dd>{this.state.firstName}</dd>
            </dl>
            <dl className="dl-horizontal">
            <dt>Mobile Number:<span></span></dt>
            <dd>{this.state.mobileno}</dd>
            </dl>
            <dl className="dl-horizontal">
            <dt>Pincode:<span></span></dt>
            <dd>{this.state.pincode}</dd>
            </dl>
            <dl className="dl-horizontal">
            <dt>Email:<span></span></dt>
            <dd>{this.state.email}</dd>
            </dl>
            <dl className="dl-horizontal">
            <dt>Address:<span></span></dt>
            <dd>{this.state.address}</dd>
            </dl>
            <dl className="dl-horizontal">
            <dt>City:<span></span></dt>
            <dd>{this.state.city}</dd>
            </dl>
            <div>
            </div>
            </div>
            </div>
            </div>


            <div className="col-sm-6">        
            <h3><strong>PAYMENT</strong></h3>
            <label className="radio-inline"><input type="radio" name="optradio"/>Credit card</label>
            <div className="credit_card">
            </div>
            <div className="name_of_card">
            <div className="form-group">
            <label >Name on card</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name on card"/>
            </div>
            </div>
            <div className="name_of_card">
            <div className="form-group">
            <label >Card number</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Card number"/>
            </div>
            </div>
            <p>Expiration date</p>
            <div className="expir_date col-sm-3 p_rm">                      
            <div className="form-group">                      
            <select className="form-control">
            <option>-- Select -- </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            </select>
            </div>
            </div>
            <div className="expir_date col-sm-5 p_rm">
            <div className="form-group">
            <select className="form-control">
            <option>-- Year -- </option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            </select>
            </div>
            </div>
            </div>
            
            </div>
            <div className="wizard-inner">
            <ul className="nav" role="tablist">
            <li id="nextprev" role="presentation" className="">
            <a href="#step3" type="button" className="btn btn-default" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
            <h3>Next</h3>
            </a>
            </li>
            <li id="nextprev" role="presentation" className="active">
            <a href="#step1" type="button" className="btn btn-default" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
            <h3>Prev</h3>
            </a>
            </li>
            
            </ul>
            </div>
            <div className="clearfix"></div>
            <ul className="list-inline pull-right">
            </ul>
            </div>



            </div>
            <div className="tab-pane" role="tabpanel" id="step3">
            <div id="addr1" className="col-sm-2">
            <h5><strong>Invoice address</strong></h5>                      
            <p>{this.state.firstName},</p>
            <p>{this.state.address}, </p>
            <p>{this.state.city}</p>                     
            </div>
            <div className="col-sm-2">
            <h5><strong>Payment method </strong></h5>
            <p>Credit Card</p>   
            </div>
            <div className="col-sm-2">
            <h5><strong>Total amount </strong></h5>
            <h3><span id="totalamt">39210 INR</span></h3>   
            </div>
            
            <div className="col-sm-12">
            <div id="seperator"></div>
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
    

            
            </div>

            <div className="wizard-inner">
            <ul className="nav" role="tablist">
            
            <li id="nextprev" role="presentation" className="">
            <a href="/success" type="button" className="btn btn-primary">
            <h3>Pay</h3>
            </a>
            </li>
            
            <li id="nextprev" role="presentation" className="">
            <a href="#step2" type="button" className="btn btn-default" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
            <h3>Prev</h3>
            </a>
            </li>
            
            
            </ul>
            </div>


            </div>
            </div>
            </form>
            </div>
            </section>
            </div>
            <div id="seperator"></div>
            <div id="seperator"></div>

            </div>
        );
    }
}



  export default Billing;
  