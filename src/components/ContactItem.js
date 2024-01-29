import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../actions';
import styled from 'styled-components';

const ContactItemWrapper = styled.li`
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ContactName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #ff3333;
  }
`;

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <ContactItemWrapper>
      <ContactInfo>
        <ContactName>{contact.name}</ContactName>
        - {contact.email} - {contact.phone}
      </ContactInfo>
      <RemoveButton onClick={handleRemove}>Remover</RemoveButton>
    </ContactItemWrapper>
  );
};

export default ContactItem;

