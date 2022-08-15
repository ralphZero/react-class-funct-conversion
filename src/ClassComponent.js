import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        }
    }

    render() {
        return (
            <h1>This is a class component {this.state.count}</h1>
        )
    }
}

export default ClassComponent;