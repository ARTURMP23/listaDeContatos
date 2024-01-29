import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleEdit = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <Provider store={store}>
      <div>
        <ContactList handleEdit={handleEdit} />
        <ContactForm selectedContact={selectedContact} />
      </div>
    </Provider>
  );
};

export default App;

