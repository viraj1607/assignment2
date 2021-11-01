
import { Component } from 'react';
import './App.css';
import Feedback from './components/feedback/feedback';
import List from './components/list/list';

class App extends Component{
  state={
    details:[]
  }

  addDetails=(name,dept,rating)=>{
    const details=[...this.state.details]
    const detail={
      id:details.length+1,
      name,
      dept,
      rating
    }
    details.push(detail);
    this.setState({details})
  }
  render(){
    return(
     <div className="container">
        <Feedback addDetails={this.addDetails}/>
          {/* <ul>
            {this.state.details.map((item)=>{
              return(
                <li>{item.name}|{item.dept}|{item.rating}</li>
              )
            })}
          </ul> */}
          <List entry={this.state.details}/>
     </div>
    )
  }
}

export default App;
