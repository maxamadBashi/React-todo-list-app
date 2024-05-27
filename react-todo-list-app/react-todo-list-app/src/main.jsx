import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This can be empty as Tailwind CSS is included via CDN
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);