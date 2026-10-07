import { useEffect, useState } from 'react';
import React from 'react';
import TerminatorList from './components/TerminatorList.jsx';
import { models } from './components/models.js';
import SearchBox from './components/SearchBox.jsx';

function App() {
    const [state, setState] = useState({models: [], searchfield: ''})
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setState({...state, models: users}));
    }, []);
    const onSearchChange = (event) => {
        setState({...state, searchfield: event.target.value});
    };

    const filteredModels = state.models.filter(model => model.name.toLowerCase().includes(state.searchfield.toLowerCase()));
    return (
        <div className="tc">
            <h1 className="f1">Terminátor Modellek</h1>
            <SearchBox searchChange={onSearchChange}/>
            <TerminatorList models={filteredModels} />
        </div>
    );
};

export default App;