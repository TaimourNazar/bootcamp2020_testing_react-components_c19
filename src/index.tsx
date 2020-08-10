import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import AppSearch from './components/AppSearch';
import Story from './components/Story';
import User from './components/User';
import {Header} from './components/Header';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="appsearch" element={<AppSearch/>}></Route>
      <Route path="story" element={<Story/>}></Route>
      <Route path="user" element={<User/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
