import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './component/app';
import { Provider } from 'react-redux';
import store from './store'

const App = () =>{
    return (
        <Provider store={store}>
            <RootApp/>
        </Provider>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

