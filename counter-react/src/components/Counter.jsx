import { Component } from "react";

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            Counter: 0
        };
    }
    handleClick =(value) =>{
        this.setState({
            Counter : this.state.Counter + value
        })
    }
    handleReset = () =>{
        this.setState({
            Counter : 0
        })
    }
    render(){
        return(
            <>
            <h1>Counter using Class : {this.state.Counter}</h1>
            <button onClick={() => this.handleClick(1) } > + (increase)</button>
            <button onClick={() => this.handleClick(-1) } > - (Decrease)</button>
            <button onClick={() => this.handleReset() } > Reset </button>


            </>
        )
    }
}