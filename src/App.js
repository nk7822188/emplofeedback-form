import './App.css';
import {Component} from "react";
import { Container } from './component/Emfeedback';
class Form extends Component {
  state={
    name:"",
    department:"",
    rating:0,
    feedback:[],
    btn:true,
  }
  nameUpdate=($event)=> {
		const value=$event.target.value;
		this.setState({name:value});
	}
  updatedepartment = ($event)=>{
		const departmentupdate=$event.target.value;
		this.setState({department:departmentupdate});
	};
  updaterating=($event)=>{
    const ratingupdate=$event.target.value;
    this.setState({rating:ratingupdate});
  }
  handleForm=($event)=>{
    $event.preventDefault();
    const feedback=[...this.state.feedback];
    const feedba={
      id:feedback.length+1,
      name:this.state.name,
      department:this.state.department,
      rating:this.state.rating,
    };
    feedback.push(feedba);
    this.setState({feedback,name:"",department:"",rating:0});
    this.setState({btn:false});
  };
  goback=()=>{
    this.setState({btn:true});
  };
  render(){
    return(
      <div className="App">
        <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
        {this.state.btn === true ? (
        <form>
          <div>
          <label htmlFor="namee">NAME:</label>
							<input className="nam" type="text" name="namee" value={this.state.name}
							onChange={this.nameUpdate}
							/>
              <br/>
              <br/>
              <label htmlFor="depart">DEPARTMENT:</label>
							<input className="nam" type="text" name="department" value={this.state.department}
							onChange={this.updatedepartment}
							/>
							<br/>
              <br/>
              <label htmlFor="rating">RATING:</label>
							<input className="nam" type="text" name="rating" value={this.state.rating}
							onChange={this.updaterating}
							/>
							<br/>
              <br/>
              <button className="btn" type="submit" onClick={ this.handleForm} >Submit</button>
              
          </div>
        </form>) :(
        <Container entry={this.state.feedback} goback={this.goback} />)}
         
       
      </div>
    );
  }

}


 


export default Form;
