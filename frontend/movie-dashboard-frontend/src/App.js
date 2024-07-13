import React, { useState } from 'react';
import './App.css';
import TopGrossMovies from './components/TopGrossMovies';
import TopVotedMovies from './components/TopVotedMovies';
import TopRatedMovies from './components/TopRatedMovies';

function App() {
    const [year, setYear] = useState('');

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    return (
        <div className="App container-fluid">
            <header className="App-header">
                <h1>Movie Dashboard</h1>
                <div className="input-container form-group">
                    <label>Enter Year: </label>
                    <input 
                        type="number" 
                        className="form-control"
                        value={year} 
                        onChange={handleYearChange} 
                    />
                </div>
            </header>
            <div className="chart-container mb-4">
                <h2>Top Gross Movies for {year}</h2>
                <TopGrossMovies year={year} />
            </div>
            <div className="chart-container mb-4">
                <h2>Top Rated Movies for {year}</h2>
                <TopRatedMovies year={year} />
            </div>
            <div className="chart-container mb-4">
                <h2>Top Voted Movies of All Time</h2>
                <TopVotedMovies />
            </div>
        </div>
    );
}

export default App;
