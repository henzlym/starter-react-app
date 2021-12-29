import React from "react";
import './app.scss';

function App(params) {
    const apiCall = () => {
        console.log('Fetching results...');
        fetch('/api/')
            .then(response => response.json())
            .then(data => console.log(data));
    }
    return(
        <div className="app">
            <h1>Hello World</h1>
            <button onClick={() => {
                apiCall();
            }}>Fetch Results</button>
        </div>
    )
}
export default App;