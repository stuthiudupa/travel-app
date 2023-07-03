
function Home() {
    return (
      <div>
        {/* <Carousel></Carousel> */}
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
          
            <div className="carousel-inner">
              <div className="item active">
                <img src="https://i.imgur.com/u2ki7xo.jpg" alt="beach"></img>
                <div className=" carousel-caption overlay-dark"></div>
                <div className="carousel-caption">
                <h2>BEACHES</h2>
                <p>The traveller will definitely fall in love with the miles of silver, white beaches, stretched throughout the Western coast. </p>
                </div>
              </div>
          
              <div className="item">
                <img src="https://i.imgur.com/nUWSQ3R.jpg" alt="wildlife"></img>
                <div className=" carousel-caption overlay-dark"></div>
                <div className="carousel-caption">
                <h2>WILDLIFE</h2>
                <p><span>The state is virtually a delight for those who love to visit wildlife sanctuaries and national parks and be a witness to nature's beauty.</span></p>
                </div>
              </div>
              
              <div className="item">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/ganesh-sixteen_nine.jpg?size=948:533" alt="spiritual"></img>
                <div className=" carousel-caption overlay-dark"></div>
                <div className="carousel-caption">
                <h2>SPIRITUAL</h2>
                <p>The experience of Maharashtra is diverse and rich with colourful cultures, woven into one gigantic quilt. The festivals here galvanise the sleepy thousands into fervent motion.</p>
                </div>
              </div>
          
              <div className="item">
                <img src="https://i.imgur.com/YTXfIUQ.jpg" alt="forts"></img>
                <div className=" carousel-caption overlay-dark"></div>
                <div className="carousel-caption">
                <h2>FORTS AND CAVES</h2>
                <p>There are around 350 forts in Maharashtra bringing fame to the majestic state.Even today, these forts stand tall, reminding us of the majestic Maratha rule along with times gone by!</p>
                </div>
              </div>
            </div>
          
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      


        {/* <Jumbotron></Jumbotron> */}
        <div className="jumbotron text-center">
            <div className="container">
            <span><h2><strong>Welcome aboard a travel experience that gives you a glimpse into this vibrant and beautiful land.</strong></h2>
                <br/><p>Welcome to Maharashtra. A land untouched, unsullied, unlimited.</p>
                <a href="/booking" className="btn btn-danger btn-lg">BOOK NOW</a></span>
            </div>
          </div>


        {/* <Divlist></Divlist> */}
        <div id="divlist">
        <div className="container">
        
        <h3><strong>SPOTLIGHT</strong></h3>
        <div className="row">
        <div className="col-md-4">
        <div className="thumbnail">
            <a href="https://www.tripadvisor.in/Attractions-g297648-Activities-zft11312-Maharashtra.html">
        <img src="https://i.imgur.com/ohUHcq9.png" alt="spotlight1"></img>
        <div className="caption">
            <p>Street Food Tour with Guide: Listed in the 20 best in the world by The Guardian</p>
        </div>
        </a>
        </div>
        </div>
        
        <div className="col-md-4">
        <div className="thumbnail">
            <a href="https://www.tripadvisor.in/Attractions-g297648-Activities-zft11312-Maharashtra.html">
        <img src="https://i.imgur.com/ybnFYHT.jpg" alt="spotlight1"></img>
        <div className="caption">
            <p>Exciting Things to Do in Maharashtra for Thrill Seekers</p>
        </div>
        </a>
        </div>
        </div>
        
        <div className="col-md-4">
        <div className="thumbnail">
            <a href="https://www.tripadvisor.in/AttractionProductReview-g304554-d23826997-Private_Half_Day_Bombay_Sightseeing_Tour_with_Guide_and_Transportation-Mumbai_Maha.html">
        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0d/07/d4/ca.jpg" alt="spotlight1"></img>
        <div className="caption">
            <p>Private Half-Day Bombay Sightseeing Tour with Guide and Transportation</p>
        </div>
        </a>
        </div>
        </div>
        </div>

        <div id="seperator"></div>
        <h3><strong>POPULAR PLACES</strong></h3>
        <div className="row">
            <div className="col-md-7">
            <a href="https://www.tripadvisor.in/Attraction_Review-g304554-d311667-Reviews-Gateway_of_India-Mumbai_Maharashtra.html">
                <div id="popular1">
                <img id="pop1" className="img-rounded" src="https://i.imgur.com/XVylDfJ.png" alt="popular1"></img>
                <div className="overlay">
                <div className="text"><strong>GATEWAY OF INDIA</strong><br/>Built in 1911 to welcome the King and Queen of England, this stone archway in Colaba is now a historic landmark.</div>
                </div>
            </div>
                </a>

            </div>
            <div className="col-md-3">

            <a href="https://mumbai7.com/haji-ali/">
            <div id="popular2">
                <img id="pop2" className="img-rounded" src="https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Haji-Ali.jpg" alt="popular2"></img>
                <div className="overlay">
                <div className="text"><strong>HAJI ALI MOSQUE</strong><br/>Sitting on a jetty in the Arabian sea, this spectacular white mosque was built to honor and house the remains of the Muslim saint Haji Ali.</div>
                </div>
                </div>
                </a>
                <a href="https://www.tripadvisor.in/Attraction_Review-g304554-d321412-Reviews-Chhatrapati_Shivaji_Terminus-Mumbai_Maharashtra.html">
                <div id="popular2">
                <img id="pop3" className="img-rounded" src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/1b/76/b9.jpg" alt="popular1"></img>
                <div className="overlay">
                <div className="text"><strong>CHHATRAPATI SHIVAJI TERMINUS</strong><br/>India's most beautiful railway station is a masterpiece of Gothic architecture with stained-glass windows, towering spires, domed arches.</div>
                </div>
                </div>
                </a>
            </div>
        </div>
        <br/>

        <div id="seperator"></div>
        <h3><strong>CUISINES TO EXPLORE</strong></h3>
        </div>
 
        <div className="container-fluid">
        <figure className="textover">
                <img id="cuisines" src="https://i.imgur.com/1FlTtRR.png" alt="cuisines"></img>
                <figcaption>10 Most Popular<br/><strong>MAHARASHTRIAN DISHES</strong><br/><a href="https://www.tasteatlas.com/most-popular-dishes-in-maharashtra" id="readmore" className="btn btn-primary-outline">read more <span className="glyphicon glyphicon-circle-arrow-right"></span></a></figcaption>
                </figure>
                <div id="endofpage"></div>
            </div>

            

            </div>

      </div>
    );
  }
  
  export default Home;