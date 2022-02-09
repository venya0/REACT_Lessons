import React, { Component } from "react";

export class Message extends Component {
    state = {
        word: this.props.word
    }

    handleClick = () => {
        this.setState({ word: 'XYZ' })
    }

    render() {
        return (
            <>
            <button onClick={this.handleClick}>Lorem ipsum dolor sit amet.</button>
            <p>You can change the text here — {this.state.word}</p>
            </>
        )
    }
}