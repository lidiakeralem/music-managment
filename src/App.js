import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home'; 

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Song Management System</h1>
                <Home />
            </div>
        </Provider>
    );
};

export default App;


