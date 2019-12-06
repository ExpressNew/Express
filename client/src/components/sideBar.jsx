
//add//
//
//
//
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      sizes: "",
      colors: []
    };
  }

  componentDidMount() {
    var that = this;
    var path = window.location.href;
    var id_ = path.substring(path.indexOf("=") + 1);
    if (id_ === "") {
      id_ = 1;
    }
    console.log(id_);
    $.ajax({
      type: "GET",
      url: "/id/?id=" + that.state.id,
      data: { id: id_ },
      success: function(data) {
        that.setState({
          id: data.id,
          name: data.name,
          price: data.price,
          sizes: data.sizes,
          colors: data.colors
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
  render() {
    return (
      <div className="wholeProject">
        {/* /////////Name section ///////// */}
        <div className="nameSection">
          <h1 id="itemname">{this.state.name}</h1>
        </div>
        {/* /////////Price section ///////// */}
        <div className="price">
          <span>{this.state.price} </span>
          <span id="revstart">★★★★★ Reviews</span>
          <div>
            <img id="imgcolor" src="https://i.ibb.co/NLTs0Yp/coloc.png" />
          </div>
          <hr></hr>
          <div>
            <img id="imgcolor2" src="https://i.ibb.co/1J0xrhs/size.png" />
          </div>
        </div>
        <p>Buy 1, Get 1 50% Off</p>
        <hr></hr>
        {/* /////////Size section ///////// */}
        <div>
          {/* <p>{this.state.sizes} </p>
          <p>Recommend My Size</p> */}
        </div>

                 {/* ////////color Section////// */}
 {/* <div className="colorSection">{this.state.colors.map((item,i)=>{
             return(
                  <span key={i}>
                    <img src={item}></img>
                  </span>
                  
             )
           })}
            </div> */}
        {/* add bag section  */}
        <button className="bag">ADD TO BAG</button> <br />
        {/* Average Section  */}
        <br />{" "}
        <div className="AverDiv">
          {" "}
          Average Fit based on{" "}
          <a id="ancorsidebar" href="default.asp" target="_blank">
            user reviews:
          </a>
        </div>
        <div>
          <img src="https://i.ibb.co/Bjz938z/las-d.png" />
        </div>
        <hr></hr>
        {/* Product Section */}
        <div className="pro">
          <b>Product Details</b>
        </div>
        <hr></hr>
        {/* shipping section */}
        <div>
          <b>Shipping and Returns</b>
        </div>
        <hr></hr>
        {/* avilability Section  */}
        <section className="Avilability">
          <span className="check">Check Availability at Stores Near You</span>
          <div>
          <br/>
          </div>
          <button className="avilBut">Change Store</button>
        </section>
        <hr></hr>
        {/* gift section */}
        <div className="giftPartOut">
          <span className="giftPartTitle">
            <a
              className="giftLink"
              href="https://express.smartgiftit.com/sender/get-gifting/11512738"
              title="Send this product as a gift"
            >
              Send As Gift{" "}
            </a>
            <div className="giftPartText">
              Recipient can customize or exchange online
            </div>
          </span>
          {/* <span className= "giftIcon">
                 <a href="https://cdn4.iconfinder.com/data/icons/gift-5/200/577_gift-512.png" ></a> 
                </span>                */}
        </div>
      </div>
    );
  }
}
// ReactDOM.render(<Side />, document.getElementById("sideBar"));
export default Side;
