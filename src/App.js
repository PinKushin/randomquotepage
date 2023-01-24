import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='App-header' id='quote-box'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <p id='text'>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <button id='new-quote' onClick=''>New Quote</button>
                    <a
                        className='App-link'
                        href='twitter.com/intent/tweet'
                        target='_blank'
                        rel='noopener noreferrer'
                        id='tweet-quote'
                    >
                        Learn React
                    </a>
                </div>
            </div>
        );
    }
}

export default App;
