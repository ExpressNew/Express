import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import SimpleImageSlider from "react-simple-image-slider";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", imges: [] };
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
      //   dataType: "application/json",
      success: function(data) {
        console.log("ajax", data);
        that.setState({ id: data.id, imges: data.imges });
        console.log("DONE!");
        console.log(that.state.imges);
      },
      error: function(err) {
        console.log(err, "kjhsdkajs");
      }
    });
  }
  render() {
    return (
      <div id="photos">
        <img
          id="side"
          src="https://images.express.com/is/image/expressfashion/0020_00284105_2029_f020?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
        />
        <div>
          <img
            id="side2"
            src="https://images.express.com/is/image/expressfashion/0020_00284105_2029_f052?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
          />
        </div>
        <div>
          <img
            id="side3"
            src="https://images.express.com/is/image/expressfashion/0020_00284105_2029_f034?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
          />
        </div>
        <div className="images">
          <SimpleImageSlider
            width={810}
            height={554}
            images={this.state.imges}
          />
        </div>
        <br />
        <h2 className="text">Other guys are wearing</h2>
        <hr className="hr" />
        <div>
          <a href="https://www.express.com/clothing/men/timbuk2-authority-laptop-backpack/pro/00158908/color/Jet%20Black/">
          <img
            id="pic1" 
            src="https://images.express.com/is/image/expressfashion/0034_00158908_1056_f001?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
          /> </a>



          <a href="https://www.express.com/clothing/men/slim-button-down-denim-shirt/pro/00284499/color/Medium%20Wash/e/regular/" >
          <img
            id="pic2"
            src="https://images.express.com/is/image/expressfashion/0020_00284499_0019_f003?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
          /></a>


           <a href="https://www.express.com/clothing/men/classic-fit-twill-tuxedo-dress-shirt/pro/00302736/color/White/e/regular/" >
             <img
            id="pic3"
            src="https://images.express.com/is/image/expressfashion/0036_05051954_0010_f?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
          /></a>


          <a href = "https://www.express.com/clothing/men/orlando-magic-nba-twill-shirt-jacket/pro/00284355/color/Jet%20Black/e/regular/"> <img
            id="pic4"
            src="https://images.express.com/is/image/expressfashion/0020_00284355_1056_f030?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
          /></a>


         <a href= "https://www.express.com/clothing/men/slim-twill-military-shirt/pro/00282886/color/olive%20green/e/regular/"> <img
            id="pic5"
            src="https://images.express.com/is/image/expressfashion/0022_04777890_0010_f010?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
          /></a>
        </div>
        <div>
          <h1 className="description">
            <u>
              Slim Stretch Crew Neck T-
              <br />
              Shirt.
            </u>
            <br />
            $22.90
          </h1>
          <h1 className="text222">
            <u>
              Slim Stretch Cotton Crew <br />
              Neck T-Shirt
            </u>
            <br />
            $22.90
          </h1>
          <h1 className="text222">
            <u>
              Slim Supersoft V-Neck T-
              <br />
              Shirt
            </u>
            <br />
            $24.90
          </h1>
          <h1 className="text222">
            <u>
              Short Sleeve Crew Neck T-
              <br />
              Shirt
              <br />
            </u>
            <strike>$24.90</strike> <span id="enna">$9.90</span>
          </h1>
          <h1 className="text222">
            <u>
              Crew Neck Drop Shoulder
              <br /> EXP Nyc Tee
              <br />
            </u>
            $39.90
          </h1>
        </div>
        <div>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
export default App;

// https://images.express.com/is/image/expressfashion/0036_05051421_1695_f001?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon
// https://images.express.com/is/image/expressfashion/0022_04777984_0058_f039?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon
// https://images.express.com/is/image/expressfashion/0022_04777321_0058_f029?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon
