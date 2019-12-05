import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Authentication extends React.Component {
    constructor(props) {
        super(props);
    }

    saveData() {
      event.preventDefault();
       console.log("heloooo from save");
      var data = {
        emailAddress: $("#emailAddress").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        password: $("#password").val(),
        country: $("#country").val()
      };


      $.ajax({
        url: "/signup",
        type: "POST",
        data: data,
        datatype: "json",
        success: data=>{
          console.log("success !!")
          window.location='https://mighty-retreat-72811.herokuapp.com/'
        

        }
      });
    }



    handleClick() {
      event.preventDefault();
      this.setState({
        componant: <Signup />
      });
    }
    loginAccount() {
      event.preventDefault();
      var data = {
        emailAddress: $("#emailAddress").val(),
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        password: $("#password").val(),
        country: $("#country").val()
      };
      var that = this;
      $.ajax({
        url: "/login",
        type: "POST",
        data: data,
        datatype: "json",
        success: function(res) {
          localStorage.setItem("token", res);
          const decoded = jwt_decode(res);
          that.setState({
            emailAddress: decoded.password
          });
        },
        error:function(res){
          console.log("there an error with email or password !!")
          status(404)
        }
        
      });
    }
    getUser() {
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      console.log(decoded.emailAddress);
      if (decoded.password === this.state.emailAddress) {
        window.open("https://mighty-retreat-72811.herokuapp.com/", "_self");
      } else {
        alert("Wrong password or email");
      }
    }
  



render() {

    return(
      <div>
      <form  onSubmit={this.saveData.bind(this)} className="ui form">
      <div>
      <a href="https://www.express.com/register" className="express image"/>
  <img  id="pic1" src="https://i.ibb.co/0yWymY1/sfgvds.png"/>

</div>
<div>
  <h2> Sign Up with Email</h2>
</div>

<div>
<img  id="pic" src="https://i.ibb.co/dQkhR8h/Capture22.png"/>
</div>
<div id="board">
<div className="field">
        <label id="pass">Email Address *</label>
        <input id="emailAddress"/>
      </div>
      <div className="field">
        <label id="pass">First Name *</label>
        <input  id="firstName"/>
      </div>
      <div className="field">
        <label id="pass">Last Name *</label>
        <input  id="lastName"/>
      </div>
      <div className="field">
        <label id="pass">Password *</label>
        <input  id="password"/>
      </div>
      <div className="field">
        <label id="pass">country *</label>
        <input  id="country"/>
      </div>
      <div className="field">
      </div>
      <button type="submit" className="ui button" id="btn1" >Sign up</button>
      <button type="submit" className="ui button" id="btn2"  onClick={this.getUser.bind(this)}>login</button>
      </div>
      <div>
      <img  id="pic3" src="https://i.ibb.co/9N04d17/Captu55re.png"/>
      </div>
     
        <a href="https://www.instagram.com/express/" target="_blank">
      <img  id="pic2" src="https://i.ibb.co/WsHgd66/Capturedhg.png" />
      </a>
    </form>
    </div>
    )};

};

ReactDOM.render(<Authentication />, document.getElementById("Authentication"));