import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import SelectAjaxComponent from './SelectAjaxComponent';


ReactDOM.render( <SelectAjaxComponent/> , document.getElementById('root'));

serviceWorker.unregister();
