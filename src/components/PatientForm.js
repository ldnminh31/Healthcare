import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FORM_SCHEMA = [
  {
    id: 'name',
    label: 'Full name',
    type: 'text',
    required: true,
  },
  {
    id: 'birth',
    label: 'Date of birth',
    type: 'date',
    required: true,
  },
  {
    id: 'phone',
    label: 'Phone number',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'height',
    label: 'Height',
    type: 'text',
    required: true,
  },
  {
    id: 'weight',
    label: 'Weight',
    type: 'text',
    required: true,
  },
  {
    id: 'blood',
    label: 'Blood type',
    type: 'text',
    required: true,
  },
  {
    id: 'health',
    label: 'Health status',
    type: 'textarea',
    required: true,
  },
  {
    id: 'history',
    label: 'Medical history',
    type: 'textarea',
    required: true,
  },
];

const PatientForm = ({editable, setEditable}) => {
  const [patient, setPatient] = useState({})
  const handleSubmit = () => {
    setEditable(false);
  };
  return (
    <div>
      <Form>
        {FORM_SCHEMA.map((item) => (
          <Form.Group className="mb-3" controlId={item.id}>
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
              required={item?.required}
              as={item.type === 'textarea' ? item.type : 'input'}
              type={item.type}
              disabled={!editable}
            />
          </Form.Group>
        ))}
      </Form>
      <div style={{ display: editable ? 'flex' : 'none', gap: '10px' }}>
        <Button onClick={handleSubmit} style={{ padding: '0 15px' }}>
          Save
        </Button>
        <Button onClick={() => setEditable(false)} variant="danger">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default PatientForm;
