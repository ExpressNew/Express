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
  <li id="list"><a href="https://shielded-mountain-29948.herokuapp.com/">
        <div class="col-sm-3" >
     <img className="img"  src={itemsSchema.mainComImg}></img>
     <div className="overlay">
     <div className="text"  >{itemsSchema.mainComDis}</div>
     <div className="text"  >{itemsSchema.mainComPri}</div>
     <div className="text"  >{itemsSchema.mainComDisc}</div>
     <div className="text"  >{itemsSchema.mainComRef}</div>

     </div>
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




