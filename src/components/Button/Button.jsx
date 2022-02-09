import React from "react";

export class Button extends React.Component {
    state = {
        company: 'GeekBrains'
    }
    render() {
        return <>
            <h3 style={{ fontSize: "30px" }}>My school is {this.state.company}</h3>
            <h2>I am {this.props.name}</h2>
            <button>Button</button>
        </>
    }
}