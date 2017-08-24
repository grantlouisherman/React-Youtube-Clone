import React, {Component} from 'react';

export default class extends Component{
    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term);
    }
    
    render(){
        return(
            <div className="search-bar">
                 <input onChange={event => this.onInputChange(event.target.value)}/>
            </div>
           
        )
    }
}