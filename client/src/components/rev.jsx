import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import React from "react";

// var link = window.location.href;
// var id_ = substring(link.indexOf("/"));

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", reviews: [] };
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
      // dataType: "application/json",
      success: function(data) {
        that.setState({ id: data.id, reviews: data.reviews });
        console.log("DONE!");
      },
      error: function(err) {
        console.log(err, "kjhsdkajs");
      }
    });
  }

  render() {
    var sty = {
      fontSize: "30px",
      fontFamily: "Lucida Sans Unicode"
    };

    return (
      <div id="allrev">
        <br />
        <br />
        <br />
        <br />
        <center id="cen">
          <h3 id="sty">What Others are Saying</h3>
        </center>
        <hr></hr>
        <span id="spancenter">
          <span id="numofrev">★★★★★ {this.state.reviews.length} Reviews</span>
          <span id="imgspan">
            <img src="https://i.ibb.co/Bjz938z/las-d.png" />
          </span>
          <span id="rec">98% Recommended</span>
        </span>

        <hr></hr>
        <h3>Most Recent Reviews</h3>
        <div>
          <a id="writecomm" href="default.asp" target="_blank">
            READ ALL REVIEWS
          </a>
        </div>
        <div>
          {/* this.state.reviews */}
          {this.state.reviews.map((item, i) => {
            return (
              <div className="row2">
                <span className="column" key={i}>
                  ★★★★★
                  <br /> {item}
                  <br />
                  <div id="forSpan">
                    <img src="https://i.ibb.co/Bjz938z/las-d.png" />
                  </div>
                  <div id="wasHelp">
                    <img src="https://i.ibb.co/kmLrZvf/div.png" />
                  </div>
                  <div id="cyr">
                    <br />A
                  </div>
                  <img
                    class="_1AJjL"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAQAAACNxCRhAAABAUlEQVQ4y2NgAAFuBvn/JII/H29kMnAyMIH1M/AxaJGm/dXpQnsGYQY2BkaIAQIM+iTY/XPPFDYdBnEGLgZmMgx4e7MkgkGJQRBoO9T5JBjw78+JxaKGDJLAMGOB2U2CAZ8fd6QyqDAIMbAj202sAf+ubNKzYJBm4EW3mygDvr2ZXcygxiDCwIFpNxEG3D/g7sggC4xqVmx2EzDg1+e1zQyaDKLAJMOMWztOA56fjfNhkGfgRyQYEgz482P3ZPTkQoIB2JMLkQbgTi5EGYAvueAG/Aw6xCQX3ICXQYWY5IIbcDKIv90abE4oueAGLMDIEgBq5iQmyrABRqBGFnI1UwgADEvmQx8G6G4AAAAASUVORK5CYII="
                  ></img>
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <a id="more" href="default.asp" target="_blank">
            READ ALL REVIEWS
          </a>
        </div>
      </div>
    );
  }
}
export default Test;
///////////////////////
