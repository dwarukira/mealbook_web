import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Browser } from "react-router-dom";
import { Login } from '../Login';

describe(`The Login Compenent`, ()=> {

    it(`Should render`,()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Browser>
                            <Login/>
                        </Browser>, div);
        ReactDOM.unmountComponentAtNode(div);
      
    })
})