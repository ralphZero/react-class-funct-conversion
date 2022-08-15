import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
            coffee: []
        }
    }

    componentDidMount() {
        let url = 'https://api.sampleapis.com/coffee/hot';
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({...this.state, coffee: data }))
    }

    render() {
        return (
            <>
                <h1>This is a class component {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1}, () => {
                        console.log('coffee ' + this.state.coffee)
                    })
                }}>Change Count</button>
                <div>
                    {this.state.coffee.map((coffee, index) => <h3 key={index}>{coffee.title}</h3>)}
                </div>
            </>
        )
    }
}

export default ClassComponent;