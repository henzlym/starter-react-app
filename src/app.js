import React from "react";
import './app.scss';

function App(params) {
    const buttonClickEvent = () => {
        console.log('Fetching results...');
    }
    return(
        <div className="app">
            <h1>Hello World</h1>
            <button onClick={() => {
                buttonClickEvent();
            }}>Click</button>
        </div>
    )
}
export default App;