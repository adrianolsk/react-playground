import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clientes from "./pages/Clientes";
import { MessageProvider } from "./components/Mensagem";
import Menu from "./components/Menu";

const Sobre = () => (
  <div>
    <h1>Sobre</h1>
  </div>
);

const StyledContainer = styled.div`
  padding: 50px;
`;
const Layout = ({ children }) => (
  <StyledContainer>
    <Menu />
    <div>{children}</div>
  </StyledContainer>
);

class App extends Component {
  render() {
    return (
      <MessageProvider>
        <Router>
          <Layout>
            <Route exact path="/" component={Clientes} />
            <Route exact path="/sobre" component={Sobre} />
          </Layout>
        </Router>
      </MessageProvider>
    );
  }
}

export default App;
