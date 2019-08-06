import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import './index.css';
import ToDoList from './components/todoList';
import store from './store/rootReducer'
import * as serviceWorker from './serviceWorker';

const App = () => (
    <Provider store={store}>
        <ToDoList />
    </Provider>
)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
