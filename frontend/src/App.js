import React, { useState } from 'react'
// import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'
// import Footer from './component/Footer/Footer';
import MainPage from './screens/MainPage/MainPage';
import Category from './screens/Category/Category';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import CreateCategory from './screens/CreateCategory/CreateCategory';
import SingleCategory from './screens/SingleCategory/SingleCategory';
import ReactMarkdown from 'react-markdown';
import Home from './screens/MainPage/Home';
import NavBar from './component/Header/NavBar';
import Report from './screens/Category/Report';
import ReportList from './screens/Category/ReportList';
// import Header from './component/Header/Header';


const App = () => {
  const [search, setSearch] = useState("")
  console.log(search);
  return (
    <BrowserRouter>
      {/* <Header setSearch={setSearch} /> */}
      <NavBar />


      <main >
        <Route path='/' component={Home} exact />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/category' component={() => <Category search={search} />} />
        <Route path='/categorycreate' component={CreateCategory} />
        <Route path='/categoryUpdate/:id' component={SingleCategory} />
        <Route path='/report' component={Report} />
        <Route path='/reportList' component={ReportList} />


      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App