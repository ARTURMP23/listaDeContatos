import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../actions';
import styled from 'styled-components';

const Form = styled.form`
  margin: 20px;
`;

const FormGroup = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 3px;

  &:hover {
    background-color: #45a049;
  }
`;

const ContactForm = ({ selectedContact }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: selectedContact ? selectedContact.name : '',
    email: selectedContact ? selectedContact.email : '',
    phone: selectedContact ? selectedContact.phone : '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedContact) {
      dispatch(editContact({ id: selectedContact.id, ...formData }));
    } else {
      dispatch(addContact({ id: Date.now(), ...formData }));
    }

    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        Nome:
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        Email:
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        Telefone:
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">
        {selectedContact ? 'Editar contato' : 'Adicionar contato'}
      </Button>
    </Form>
  );
};

export default ContactForm;

