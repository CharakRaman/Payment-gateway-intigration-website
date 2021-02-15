import React from 'React'
import capture from './img'


function App(){

    return{
        <div className="App">
            <header className="App-header">
                <img src={capture} className="App-header" alt="logo" />
                <p>
                    Edit <code>app.js</code> and save to reload
                </p>
                <a>
                    className="App-Link"
                    onclick={showRazorPay}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Donate $5    
                </a>
            </header>
        </div>   
    }
}