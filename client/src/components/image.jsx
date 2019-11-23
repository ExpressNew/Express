import React, { Component } from 'react';

class App extends Component  {
    constructor(props){
        super(props)

       this.state = {
        data:[]
        };
    }
    
   
componentDidMount(){
    var that = this;
    var id = window.location.href.split('=')[1];
    $.ajax({
        url:"/imgs/"+id,
        type:"GET",
        dataType:"json",
        success:function(data){
        //   console.log(data);
          that.setState({data:data})
          console.log(that.state.data)
          
        },
        error:function(err){
          console.log(err)
        }
      });
    }


    


render(){
  const listItems = this.state.data.map((itemsSchema) =>
  <li id="list"><a href="https://agile-ridge-65976.herokuapp.com/?id=1">
        <div class="col-sm-3" >
     <img className="img"  src={itemsSchema.mainComImg}></img>
     <ul className="overlay">
    <li  >{itemsSchema.mainComDis}</li>
     <div><span id="strike">$79.90       </span><span class="price ">{itemsSchema.mainComPri}</span></div>
     <li  >{itemsSchema.mainComDisc}</li>
     <li  >{itemsSchema.mainComRef}</li>

     </ul>
     </div>
     </a>
     </li>
    
     
    
  // <div>
  // <img  src={itemsSchema.mainComImg} 
  // ></img>
  // <div><p>{itemsSchema.mainComDis}</p>
  // </div>
  // </div>
);
  return (
      <div >
          {listItems}
      </div>
  )
}
}          


export default App;




