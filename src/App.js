import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Canvas from "./pages/Canvas";
import Controller from "./components/Controller/index";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className='page'>
        <Header />
        <div style={{ flex: 1, display: "flex" }}>
          <Canvas />
          <Controller />
        </div>
      </div>
      <Footer />
    </Provider>
  );
};
export default App;
