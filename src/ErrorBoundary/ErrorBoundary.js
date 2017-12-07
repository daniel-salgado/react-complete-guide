//Only use ErrorBoundary when it is possible to occors an error like a web api call
import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: '',
    };

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });
    };
    
    render() {

        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }

    };
    
};

export default ErrorBoundary;
