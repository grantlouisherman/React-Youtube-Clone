import React, {Component} from 'react';

export default class extends Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(evt){

    }
    
    render(){
        return(
            <input onChange={this.handleInputChange}/>
        )
    }
}