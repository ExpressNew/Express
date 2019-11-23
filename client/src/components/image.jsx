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
     <ul className="overlay">
    <li className="card-info "  >{itemsSchema.mainComDis}</li>
     <li className="card-info"  >{itemsSchema.mainComPri}</li>
     <li className="card-info"  >{itemsSchema.mainComDisc}</li>
     <li className="card-info"  >{itemsSchema.mainComRef}</li>

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




