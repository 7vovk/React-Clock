import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds()
        };
    }

    render() {
        setInterval(() => {
            this.componentWillMount();
        }, 1000);
        return (
            <div className="App">
                {this.state.hours} : {this.state.minutes} : {this.state.seconds}
            </div>
        )
    }

    componentWillMount() {
        if ( this.state.seconds === 0 || this.state.seconds < 10 ) {
            this.setState({seconds: "0" + new Date().getSeconds()});
        } else {
            this.setState({seconds: new Date().getSeconds()});
        }

        if (this.state.minutes === 0 || this.state.minutes < 10) {
            this.setState({minutes: "0" + new Date().getMinutes()});
        } else {
            this.setState({minutes: new Date().getMinutes()});
        }

        if (this.state.hours === 0 || this.state.hours < 10) {
            this.setState({hours: "0" + new Date().getHours()});
        } else {
            this.setState({hours: new Date().getHours()});
        }
    }

    componentWillUnmount() {

    }
}

export default App;
