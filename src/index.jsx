import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searcBar.jsx';

const API_KEY = 'notmykey';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));

