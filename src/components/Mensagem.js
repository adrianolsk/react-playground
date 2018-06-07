import React from "react";
import styled from "styled-components"; // yoo
import DebugJs from "./DebugJs";

const MessageContext = React.createContext();
const MessageConsumer = MessageContext.Consumer;
//this is a little advanced shit

class MessageProvider extends React.Component {
  state = {
    messages: []
  };

  deleteAfterTime = () => {
    setTimeout(() => {
      this.setState(prevState => ({
        messages: [...prevState.messages.slice(1)]
      }));
    }, 3000);
  };

  onMessage = message => {
    this.setState(
      prevState => ({
        messages: [...prevState.messages, { text: message }]
      }),
      () => this.deleteAfterTime()
    );
  };

  render() {
    const { children } = this.props;
    const { messages } = this.state;

    return (
      <MessageContext.Provider
        value={{
          messages: this.state.messages,
          onMessage: this.onMessage
        }}
      >
        <MessageContainer>
          {messages.map((message, index) => <Mensagem message={message} />)}
        </MessageContainer>

        {children}
      </MessageContext.Provider>
    );
  }
}

const MessageContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const MessageBox = styled.div`
  margin: 5px;
  padding: 1px 20px 1px 20px;
  background-color: #77c377;
  color: #147915;
  border-radius: 5px;
`;

class Mensagem extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <MessageBox>
        <h4>{message.text}</h4>
      </MessageBox>
    );
  }
}

// High Order Function
const withMessage = Component => {
  return props => (
    <MessageConsumer>
      {context => <Component {...props} messageContext={context} />}
    </MessageConsumer>
  );
};

export { MessageProvider, MessageConsumer, withMessage };
