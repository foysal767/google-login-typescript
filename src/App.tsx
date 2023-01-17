import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/Home';
import {initializeApp} from 'firebase/app';
import { config } from './firebase/firebase.config';
import AuthRoute from './component/AuthRoute';

initializeApp(config.firebaseConfig)

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps>
 = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthRoute><HomePage /></AuthRoute>}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
 }
 export default App;
