import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import employee_data from '../../server/data.js';


ReactDOM.render( <App employee_data={employee_data}/>, document.getElementById('root') );