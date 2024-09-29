   /* 
    File name: App.jsx
    Author: Nitya Sharma
    Student ID: 301370145
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from './components/MainRouter.jsx';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
  return (
    <div className='App'> <Router>
    <Routes> <Route path="/*" element={<MainRouter></MainRouter>} /> </Routes>
  </Router>  </div>
  

  );
};
export default App;
