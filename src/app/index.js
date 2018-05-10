import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Ticker from './containers/Ticker';

class App extends Component {
    render() {
        return (
            <div>
                <Ticker/>
                <Navbar/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
