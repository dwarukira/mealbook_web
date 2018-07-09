import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Browser } from 'react-router-dom';
import App from './App';
import { } from ".";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Browser>
                      <App />
                    </Browser>, div);
  ReactDOM.unmountComponentAtNode(div);
});
