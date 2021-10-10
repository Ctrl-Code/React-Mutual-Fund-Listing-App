import React from "react";

class CustomErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            error,
            errorInfo,
        })

        // console.log(error, errorInfo.componentStack.toString());
    }

    render() {

        const { errorText } = this.props;
        const defaultErrorText = "UNDEFINED 'errorText' prop in boundary";
        if (errorText === undefined) {
            console.error(defaultErrorText);
        }

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <h1>Error Occured with: {errorText || defaultErrorText}</h1>
                    <details>
                        <summary>
                            {this.state.error}
                        </summary>
                        <p>{this.state.errorInfo}</p>
                    </details>
                </>
            );
        }

        return this.props.children;
    }
}

export default CustomErrorBoundary;