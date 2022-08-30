import React from "react";
import{App} from './Hanson-1/App'
import './Hanson-1/Myapp.css';

class Myapp extends React.Component{
    constructor(){
        super();
        this.state ={show:false}
    }
    render(){
        return(
            <>
            <h1>Styling Using Fuctional and Class Component</h1>
            <button onClick={()=>{this.setState({show:!this.state.show})}} className="btn2">To see styling in class component</button>
           {
            this.state.show ?
            <div className='box2'>
                <h2>This is created using class component</h2>
                <p className='text'>this is done using inline CSS</p>
                <p style={{color:"blue"}}>This is done using inline CSS</p>
            </div>:null
           } 
        <App /></>
        )
        
        
    }
}
export default Myapp;