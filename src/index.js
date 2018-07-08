import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"
import { createStore, applyMiddleware , compose} from "redux"
import thunk  from "redux-thunk";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./reducers"

import "./index.css"



const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f=> f
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
