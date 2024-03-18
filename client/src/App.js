import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome To Proshop</h1>
        </Container>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
