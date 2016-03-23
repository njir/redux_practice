import React form 'react';
import { createStore } form 'redux';
import { Provider }  form 'react-redux';
import App form './containers/App';
import todoApp form './reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('root');
React.render(
    <Provider store = {store}>
    {() => <App /> }
    </Provider>,
    rootElement
);

