import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage/HomePage';
import Add from './components/Add';
import store from '../src/store/store';

const App = () => {
    return <Provider store={store}>
    <div>
        <HomePage />
        <Add />
    </div>
    </Provider>
};

export default App;