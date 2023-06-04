import React, { ErrorInfo, PropsWithChildren } from 'react';

interface State {
    hasError: boolean;
    errorMessage: string;
}

class ErrorCatchComponent extends React.Component<PropsWithChildren<{}>, State> {
    constructor(props: PropsWithChildren<{}>) {
        super(props);
        this.state = { hasError: false, errorMessage: "" };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ hasError: true, errorMessage: error.message });
        console.log(error);
    }

    render() {
        return (
            <div>
                {this.state.hasError ?
                    <div style={{ background: "red", color: "black" }}>
                        {
                            this.state.errorMessage
                        }
                    </div>
                    :
                    this.props.children
                }
            </div>
        )
    }
}

export default ErrorCatchComponent;
