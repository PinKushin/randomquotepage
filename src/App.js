import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
    newQuote() {

    }

    render() {
        return (
            <div className='App'>
                <div className='App-header' id='quote-box'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <p id='text'>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p id='author'> - Anon</p>
                    <button id='new-quote' onClick=''>New Quote</button>
                    <a
                        className='App-link'
                        href='https://www.twitter.com/intent/tweet'
                        target='_blank'
                        rel='noopener noreferrer'
                        id='tweet-quote'
                    >
                        Share Quote on Twitter
                    </a>
                </div>
            </div>
        );
    }
}

export default App;
