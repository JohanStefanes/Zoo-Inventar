import React from 'react';
import MainContent from './Components/AnimalTable/MainContent.tsx';
import NavBar from "./Components/NavBar.tsx";
import "./App.css"

const App: React.FC = () => {
    return (
        <div>
            <NavBar/>
            <MainContent />
        </div>
    );
};

export default App;

