import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import styled from 'styled-components';

const ContactListContainer = styled.div`
  margin: 20px;
`;

const ContactListHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ContactListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactList = () => {
  const contacts = useSelector((state) => state);

  return (
    <ContactListContainer>
      <ContactListHeader>Lista de contato</ContactListHeader>
      <ContactListWrapper>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ContactListWrapper>
    </ContactListContainer>
  );
};

export default ContactList;


