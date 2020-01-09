import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: "", errorMessage: "" };
    }

    componentDidCatch(hasError, errorMessage) {
        this.setState({ hasError: hasError, errorMessage: errorMessage });
    }

    render() {
        if (this.state.errorMessage) {
            return (<h1>Something went wrong.</h1>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
