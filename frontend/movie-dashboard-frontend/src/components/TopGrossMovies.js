import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TopGrossMovies = ({ year }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8000/api/movies/top-gross/${year}/`)
            .then(response => {
                setData(response.data.slice(0, 5)); // Ensure we only get the top 5 movies
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [year]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error}</p>;

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
                <XAxis 
                    dataKey="title" 
                    tick={{ fontSize: 12 }} 
                    angle={-45} 
                    textAnchor="end" 
                    interval={0} 
                    tickFormatter={(value) => value.length > 15 ? `${value.substring(0, 15)}...` : value}
                />
                <YAxis tickFormatter={(tick) => new Intl.NumberFormat().format(tick)} />
                <Tooltip />
                <Legend />
                <Bar dataKey="gross" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default TopGrossMovies;
