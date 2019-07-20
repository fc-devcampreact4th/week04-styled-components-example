import React from "react";
import logo from "./logo.svg";
import "./App.css";

import CustomStyledButton from "./components/SyledButton";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <CustomStyledButton>버튼</CustomStyledButton>
                </p>
            </header>
        </div>
    );
}

export default App;
