import React, { Component } from "react";

class Message extends Component
{
    constructor()
    {
        super();
        this.state = {
            message : "Welcome Visitor"
        }
        
    }

    changeMessage()
    {
        this.setState(
            {
                message : "Visit again"
            }
        )
    }

    clickevent()
    {
        this.setState(
            {
                message : "Visit again"
            }
        )
    }

    render() {
        return( 
        <div>
            <h1>{this.state.message}</h1> 
            <button onClick={()=> this.changeMessage()} >Subscribe</button>
            <button onClick={this.clickevent.bind(this)}>Click Me once again</button>

        </div>
        
        
        )
        
    }
}

export default Message
