import { Component } from "react";
import './list.css'

function ListEntry(props){
    const{name,dept,rating}=props.item;
    return(
        <li>
            Name:{name} | Department:{dept} | Rating: {rating}
        </li>
    )
}

class List extends Component{
    render(){
        return(
            <div className="list-container">
                <ul>
                {this.props.entry.map((item)=>{
                    return <ListEntry key={item.id} item={item} />;
                })}
                </ul>
            </div>
        )
    }
}

export default List