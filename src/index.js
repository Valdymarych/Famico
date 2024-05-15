import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import {  Provider } from "react-redux"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <BrowserRouter>
            <Provider store={store}>
                <App startDate={store.getState().login.startDate}/>
            </Provider>
        </BrowserRouter>
    </>
    );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
