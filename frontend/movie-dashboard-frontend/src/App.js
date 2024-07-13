// src/App.js
import React, { useState } from 'react';
import './App.css';
import TopGrossMovies from './components/TopGrossMovies';
import TopVotedMovies from './components/TopVotedMovies';
import TopRatedMovies from './components/TopRatedMovies';

function App() {
    const [year, setYear] = useState(2020);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie Dashboard</h1>
                <div>
                    <label>Enter Year: </label>
                    <input 
                        type="number" 
                        value={year} 
                        onChange={e => setYear(e.target.value)} 
                    />
                </div>
                <TopGrossMovies year={year} />
                <TopVotedMovies />
                <TopRatedMovies year={year} />
            </header>
        </div>
    );
}

export default App;
