import React, { Component } from "react";

class Counter extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count : 0
        }
    }

    increment()
    {
        this.setState(
            {
                count : this.state.count + 1
            },
            ()=>{
                console.log(this.state.count)
            }
         
        )
        //console.log(this.state.count) 
    }

    buttonClickEvent()
    {
        console.log("Button Clicked from class component")
    }
    render()
    {
        return(
            <div>

                Count - {this.state.count}
                <button onClick={()=> this.increment()}>Increment</button>   
                <button onClick={this.buttonClickEvent}>Event </button>
                
            </div>
        )
    }
}

export default Counter