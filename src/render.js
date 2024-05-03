import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
          <BrowserRouter>
              <App taskCount={5} state={state}/>
          </BrowserRouter>
        </React.StrictMode>
      );
}
