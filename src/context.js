import React, { Component } from "react";

const ContactContext = React.createContext();

class ContactProvider extends Component {
  state = {
    contacts: []
  };

  render() {
    return (
      <ContactContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </ContactContext.Provider>
    );
  }
}

const ContactConsumer = ContactContext.Consumer;
export { ContactProvider, ContactConsumer };
