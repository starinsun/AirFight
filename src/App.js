import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Canvas from "./pages/Canvas";
import System from "./pages/System/index";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
/**
 * 首先footer是不需要改变的，因此把Router里面只有Header和主体
 * 目前先考虑canvas
 */
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='page'>
          <Header />
          <Route path='/' exact component={Canvas} />
          <Route path='/admin' component={System} />
        </div>
      </Router>
      <Footer />
    </Provider>
  );
};
export default App;
