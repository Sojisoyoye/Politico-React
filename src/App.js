import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage/HomePage';
import store from '../src/store/store';

const App = () => {
    return <Provider store={store}>
    <div>
        <HomePage />
    </div>
    </Provider>
};

export default App;