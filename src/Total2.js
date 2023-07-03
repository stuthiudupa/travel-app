import React from "react";
import "./index.css";
import axios from 'axios';


var totprice=0;
var prev_temp_price=0;

            
class Total2 extends React.Component
{

  constructor()
                    { 
                        super(); 
                        this.state={
                            quant:0
                          }

                       this.setquantref = (ele) => {this.quant = ele}
                       this.temp_price=0
                       this.onSubmit = this.onSubmit.bind(this)
                       
                    }

                    onSubmit(event){
                        event.preventDefault()
                        const submitted = {
                            qty:this.state.quant,
                            name:"Shirdi Darshan With Visit to Heritage Site of Ellora",
                            totalpr:22107*this.state.quant
                        }
                    
                        axios.post('http://localhost:4000/booking',submitted)
                        .then()
                    
                        this.setState({
                            quant:0
                          })
                                  
                }

    render() 
    {
                   
      return(
                        <div id="container">
                             <form onSubmit={this.onSubmit}>
                             <b>Select number of people:    </b>   
                            <input type = "text" className="form-control" value={this.state.quant} ref={this.setquantref} onChange={this.tot}/>
                            <br/><input type="submit" style={{width:"100px",float:"right"}} className="btn btn-primary btn-block" value='submit'/>
                            </form>
                            </div>
                    )
                }

                tot=(event)=>
                    {
                        this.setState({
                            quant:event.target.value
                          })
                        prev_temp_price=this.temp_price
                        var val=parseInt(this.quant.value)
                        if(this.quant.value==="")
                        {
                            val=0
                        }
                        var price=parseInt(this.props.price)
                        this.temp_price=val*price
                        totprice+=(this.temp_price-prev_temp_price)
                        document.getElementById(this.props.id).innerHTML="<b>Total:</b> "+totprice+" INR"

                    }
            }

            
export default Total2;