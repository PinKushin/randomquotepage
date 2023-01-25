import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function App()
{
    const [ data, setData ] = React.useState( null );

    async function updateQuote()
    {
        try
        {
            const response = await fetch( 'https://api.quotable.io/random' );
            const { statusCode, statusMessage, ...data } = await response.json();
            setData( data );
        } catch( error )
        {
            // If the API request failed, log the error to console and update state
            // so that the error will be reflected in the UI.
            console.error( error );
            setData( { content: 'Something went wrong' } );
        }
    }

    // Run `updateQuote` once when component mounts
    React.useEffect( () =>
                     {
                         updateQuote();
                     }, [] );

    // Do not render until the first quote is loaded
    if ( !data ) return null;

    return (
        <div className='App' id='quote-box'>
            <Card style={ { width: '90%', maxWidth: '40rem' } }>
                <Card.Body>
                    <blockquote className='blockquote mb-0'>
                        <p id='text'>{ data.content }</p>
                        { data.author && (
                            <footer className='blockquote-footer'>
                                <cite title='Source Title' id='author'>{ data.author }</cite>
                            </footer>
                        ) }
                    </blockquote>
                </Card.Body>
                <Card.Footer>
                    <Button id='new-quote' variant='primary' onClick={ updateQuote }>
                        New Quote
                    </Button>
                    <a href='https://www.twitter.com/intent/tweet' className='App-link' id='tweet-quote'>Share Quote on
                        Twitter</a>
                </Card.Footer>
            </Card>
        </div>
    );
}