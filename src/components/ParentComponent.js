import React, { Component } from "react";
import ChildComponent from './ChildComponent'

class ParentComponent12 extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            parent : 'ParentMsg'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child)
    {
        alert(`Hi ${this.state.parent} from ${child}`)
    }

    render()
    {
        return(
            <div>
                <ChildComponent greetHandler = {this.greetParent}></ChildComponent>
                <button>ACB</button>
            </div>
        )
    }
}

export default ParentComponent12