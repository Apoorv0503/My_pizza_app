import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";
import CardGrid from "./components/CardGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
// import ModalExampleModal from "./components/Modal";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CardGrid />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* <ModalExampleModal /> */}
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
