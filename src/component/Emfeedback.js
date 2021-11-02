import { Component } from "react";
import './Emfeedback.css';

export class Container extends Component{
   
    render(){
        return(
            <div>
            <div className="container">
                {this.props.entry.map((item)=>{
                    return(
                        <p className="fee" key={item.id}>Name:{item.name} | Department:{item.department} | Rating:{item.rating}</p>
                    )
                })}  
                
            </div>
             <div>
             <button className="btn1" onClick={()=>this.props.goback()} className="btn">Go back</button> 
            </div>
            </div>
        );
    }
}