import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import './components/bootstrap/css/bootstrap.min.css';
import Header from './components/static/MainHeader';


function App() {
  return (
   <BrowserRouter>
    <Header/>
    <AppRouter/>
   </BrowserRouter>
  );
}
export default App;
