import React from 'react';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <p> {new Date().toLocaleTimeString()} </p>
            </div>
        )
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({time: Date.now()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

export default App;
