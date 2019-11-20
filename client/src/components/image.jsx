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
        <li>
        <img className="list" src={itemsSchema.mainComImg}></img>
        <p  className="font" >{itemsSchema.mainComDis}</p>
        </li>
      );
        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}          


export default App;

