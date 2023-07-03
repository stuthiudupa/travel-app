import React from "react";
import './index.css';
import Total1 from "./Total1";
import Total2 from "./Total2";
import Total3 from "./Total3";

class Booking extends React.Component {
    render() {

      
function Packages(props) {
    return (

<div id="hotel" className="container-fluid">
    <div className="row">
<div className="col-md-5">
<h3 style={{marginLeft:"0"}}><strong>{props.name}  <span className="label label-primary" style={{fontSize:".8vw"}}>{props.dn}</span></strong></h3>
<span className="glyphicon glyphicon-map-marker"></span><strong> {props.desc}</strong>
<br/><br/><img className="img-thumbnail" src={props.src} alt="package" style={{height:"400px"}}/>
</div>
<div className="col-md-7">
<br/><br/>
<table className="table" id="itinerary">
            <thead>
            <tr>
            <th colSpan="2"><span className="glyphicon glyphicon-plane"></span>Arrival in Aurangabad | Departing on 24 Jan, 01:55 AM | Arriving on 24 Jan, 08:00 AM<br/>
 <img id="travelicon" src="https://img.icons8.com/material/24/null/transportation--v1.png" alt="car"/> Airport to hotel in Aurangabad</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><strong>Day 1</strong>   <br/><small>Jan 24, Tue -</small></td>
            <td><img src="https://img.icons8.com/material/24/null/passenger-with-baggage.png" alt="traveler"/>
            Sightseeing In Aurangabad     <br/><img src="https://img.icons8.com/ios-filled/50/null/3-star-hotel.png" alt="hotel"/>
            Check in to Click Hotel Aurangabad
</td>
            </tr>
            <tr>
            <td><strong>Day 2</strong>   <br/><small>Jan 25, Wed -</small></td>
            <td><img id="travelicon" src="https://img.icons8.com/material/24/null/transportation--v1.png" alt="car"/>
            Private AC Sedan - AC for sightseeing in & around Aurangabad   <br/><img src="https://img.icons8.com/material/24/null/passenger-with-baggage.png" alt="traveler"/>
            Sightseeing In Aurangabad  <br/><img src="https://img.icons8.com/material/24/null/restaurant-on-site.png" alt="meals"/>
            Day Meals: Breakfast : Included at Hotel</td>
            </tr>

            <tr>
            <td><strong>Day 2</strong>   <br/><small>Jan 25, Wed -</small></td>
            <td><img id="travelicon" src="https://img.icons8.com/material/24/null/transportation--v1.png" alt="car"/>
            Private AC Sedan - AC for sightseeing in & around Aurangabad   <br/><img src="https://img.icons8.com/material/24/null/passenger-with-baggage.png" alt="traveler"/>
            Sightseeing In Aurangabad  <br/><img src="https://img.icons8.com/material/24/null/restaurant-on-site.png" alt="meals"/>
            Day Meals: Breakfast : Included at Hotel</td>
            </tr>
            
            <tr>
            <th colSpan="2">
            <img id="travelicon" src="https://img.icons8.com/material/24/null/transportation--v1.png" alt="car"/> Hotel in Shirdi to Airport in Aurangabad<br/>
            <span className="glyphicon glyphicon-plane"></span>Departure from Aurangabad| Departing on 27 Jan, 05:40 PM | Arriving on 27 Jan, 07:35 PM
            </th>
            </tr>
            </tbody>
            </table>
            <p style={{ float:"right",fontSize:"1.2vw",marginRight:"-470px",marginTop:"90px"}} id={props.id}><b>Total:</b> 0 INR</p>
            

        <div className="row" id="price">
        <div className="col-md-3">
            <div className="well well-sm">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 style={{margin:"10px auto"}}>₹{props.price} per person*</h3>
         <h4><small>*Excluding applicable taxes</small><br/><span className="glyphicon glyphicon-calendar"></span>{props.dates}</h4>
            {props.fun}
                 

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <a href="/billing" type="button" className="btn btn-primary" style={{float: "right",height:"40px",fontSize:"1.2vw",marginTop: "-50px",marginRight:"40px",marginLeft:"0"}}>Book Package</a>

</div>
        
    </div>
</div>



    )
  }
  const func1=<Total1 price="19605" id="total1"></Total1>
  const func2=<Total2 price="22107" id="total2"></Total2>
  const func3=<Total3 price="23544" id="total3"></Total3>

        return(
            <div>
                <div>
                <div id="separator" style={{height:"100px"}}></div>
                   <Packages
                   src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1289/Gorgeous%20sunrise%20view%20from%20Lonavala.jpg"
                   name="Exploring the Hills and Lakes of Lonavala"
                   dn="2N/3D"
                   desc="This package is Ideal for weekend travellers | All major sightseeing spots included | All major sightseeing spots included | All major sightseeing spots included"
                   price="19,605"
                   id="total1"
                   amt="19700"
                   fun={func1}
                   dates="19 Dec - 21 Dec" />
                 </div>
                <div>
                   <Packages 
                   src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1211/Sai%20Baba.jpg" 
                   name="Shirdi Darshan With Visit to Heritage Site of Ellora" 
                   dn="2N/3D"
                   desc="Get closer to your spiritual self and take in the calmness at Shirdi’s revered Sai Baba Temple. Continue your trip to UNESCO world heritage site of Ellora and marvel at India’s fascinating architecture."
                   id="total2"
                   price="22,107"
                   fun={func2}
                   amt="22200"
                   dates="13 Jan - 15 Jan" />
                   
                 </div>
                <div>
                   <Packages
                    src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1378/Iconic%20Bibi%20Ka%20Maqbara%20in%20Aurangabad.jpg"
                    name="Magical Maharashtra!"
                    dn="3N/4D"
                    desc="Enjoy a splendid holiday across Maharashtra. Admire the carvings of Gods and Goddesses in the caves of Aurangabad. Be inspired by the humble life and miracles of Sai Baba at Shirdi. Perform a puja at the Shani Shingnapur Temple."
                   id="total3"
                   price="23,544"
                   fun={func3}
                   amt="23700"
                    dates="24 Jan - 27 Jan" />
                    
                 </div>
                 </div>
        );
    }
}




  export default Booking;
  