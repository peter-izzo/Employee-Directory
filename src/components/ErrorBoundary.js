import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops, well this is awkward. Something isn't working (´・ω・｀)</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;