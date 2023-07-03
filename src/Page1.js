import React from "react";

  class Page1 extends React.Component {
    render() {
        return(
            <div id="seeanddo" >
                <div className="container-fluid">
            <figure className="textover">
                    <img id="headimage" src="https://assets.cntraveller.in/photos/61266a3fce6a07f2ba18d74e/master/w_3300,h_2202,c_limit/Vasai%20Fort.jpg" alt="snd"></img>
                    <figcaption id="headcap"><strong>SEE AND DO</strong><p>The diverse things to do in Maharashtra from holidaying in hill stations to adventurous activities like trekking and waterfall rappelling makes this Indian State a must-visit destination.</p></figcaption>
                    </figure></div>

                    <div className="container">
                    <div style={{height:"100px"}}></div>
                    <h3><strong>TOP THINGS TO SEE AND DO</strong></h3>

                    <div className="row">
                        <div className="col-md-6">

                        <figure className="textover">
                        <a href="https://www.tourmyindia.com/states/maharashtra/wildlife-tourism.html">

                                <img id="tourismimg" src="https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/image/tadoba-national-park-tour1.webp" alt="tourism"></img>
                                <figcaption id="tourcap"><strong>WILDLIFE TOURISM</strong><br/>It's the pleasant climate and greenery that beckons the flourishing wildlife with an abundance of flora in Maharashtra like West India.<br/></figcaption>
                                </a></figure>

                    <div style={{height:"20px"}}></div>


                        <figure className="textover">
                        <a href="https://www.tourmyindia.com/states/maharashtra/heritage-tourism.html">

                                <img id="tourismimg" src="https://www.tourmyindia.com/images/ellora-caves-1.jpg" alt="tourism"/>
                                <figcaption id="tourcap"><strong>HERITAGE TOURISM</strong><br/>When it comes to the best architecture sites in India, Maharashtra’s contribution is immense. Don't forget to visit the heritage sites, which were once the thriving towns and capitals.<br/></figcaption>
                                </a></figure>

                        </div>


                        <div className="col-md-6">

<figure className="textover">
<a href="https://www.tourmyindia.com/states/maharashtra/wildlife-tourism.html">

        <img id="tourismimg" src="https://www.tourmyindia.com/states/maharashtra/images/scuba-diving1.jpg" alt="tourism"/>
        <figcaption id="tourcap"><strong>ADVENTURE TOURISM</strong><br/>Bestowed with the presence of breathtaking ethereal mountains, chattering river streams, Maharashtra has a bucket-load of exciting activities for the adventure lovers. <br/></figcaption>
        </a></figure>

        <div style={{height:"20px"}}></div>


<figure className="textover">
<a href="https://www.whatshot.in/mumbai/30-things-to-do-in-maharashtra-before-you-turn-30-the-ultimate-list-c-29553">

        <img id="tourismimg" src="https://travelplaner.net/wp-content/uploads/2021/11/Colaba-Causeway-1.jpg" alt="tourism"/>
        <figcaption id="tourcap"><strong>SHOPPING</strong><br/>A memorable shopping experience in Maharashtra can begin from the capital city, Mumbai, where Colaba Causeway Market invite you to enjoy shopping for clothes, fruit, books, jewellery, you name it and it’ll be on offer here.<br/></figcaption>
        </a></figure>

</div>



                    </div>

                    <div id="seperator"></div>
                    <h3><strong>OUR RECOMMENDATIONS</strong></h3>

                    <div className="responsive">
                    <div className="gallery">
                      <a href="https://www.whatshot.in/mumbai/30-things-to-do-in-maharashtra-before-you-turn-30-the-ultimate-list-c-29553">
                        <img src="https://im.whatshot.in/img/2021/May/flamingo-1620222423.jpg" alt="rec" width="600" height="400"/>
                      </a>
                      <div className="desc" style={{height:"160px"}}>Go flamingo-watching.<br/>March is the best time to go flamingo spotting, but you have time till May.</div>
                    </div>
                  </div>


                  <div className="responsive">
                    <div className="gallery">
                      <a href="https://www.whatshot.in/mumbai/30-things-to-do-in-maharashtra-before-you-turn-30-the-ultimate-list-c-29553">
                        <img src="https://im.whatshot.in/img/2021/May/strawberries-near-wai-1620220946.jpg" alt="rec" width="600" height="400"/>
                      </a>
                      <div className="desc" style={{height:"160px"}}>Pick strawberries at strawberry village near Wai. This hamlet has beautiful strawberry farms everywhere.
</div>
                    </div>
                  </div>

                  <div className="responsive">
                    <div className="gallery">
                      <a href="https://www.whatshot.in/mumbai/30-things-to-do-in-maharashtra-before-you-turn-30-the-ultimate-list-c-29553">
                        <img src="https://im.whatshot.in/img/2021/May/hedvi-1620220794.jpg" alt="rec" width="600" height="400"/>
                      </a>
                      <div className="desc" style={{height:"160px"}}> Visit this mystical black sand cove called Hedvi Beach situated along the Konkan coast.</div>
                    </div>
                  </div>

                  <div className="responsive">
                    <div className="gallery">
                      <a href="https://indianculture.gov.in/food-and-culture/central/food-maharashtra-sweet-and-tangy-journey">
                        <img src="https://im.whatshot.in/img/2021/May/paragliding-1620220866.jpg" alt="rec" width="600" height="400"/>
                      </a>
                      <div className="desc" style={{height:"160px"}}>Paragliding at Kamshet promises you an uninterrupted view of the Sahyadris.</div>
                    </div>
                  </div>
                  </div>

                    <div id="endofpage"></div>
                </div>
            );
    }
}



  export default Page1;
  