import React, {Component} from 'react';
import './feedback.css'

class Feedback extends Component{
    state={
        name:"",
        dept:"",
        rating:""
    }

    updateName=(e)=>{
        const name=e.target.value;
        this.setState({name})
    }

    updateDept=(e)=>{
        const dept=e.target.value;
        this.setState({dept})
    }

    updateRating=(e)=>{
        const rating=e.target.value;
        this.setState({rating})
    }

    handleForm=(e)=>{
        e.preventDefault();
        const { name, dept, rating } = this.state;
		this.setState({ name:"",dept:"",rating:"" });
		this.props.addDetails(name,dept,rating);
    }

    render(){
        return(
            <div className="feedback-container">
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <br/>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.updateName}/>
                <br/>
                Department:
                <input type="text" name="dept" value={this.state.dept} onChange={this.updateDept}/>
                <br/>
                Rating:
                <input type="text" name="rating" value={this.state.rating} onChange={this.updateRating}/>
                <br/>
                <button onClick={this.handleForm}>Submit</button>
            </div>  
        )
    }
}

export default Feedback