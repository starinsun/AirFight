import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Canvas from "./pages/Canvas";
import System from "./pages/System/index";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
