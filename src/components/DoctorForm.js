import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FORM_SCHEMA = [
  {
    id: 'name',
    label: 'Full name',
    type: 'text',
    required: true,
  },
  {
    id: 'gender',
    label: 'Gender',
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
    required: true,
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    required: true,
  },
  {
    id: 'rank',
    label: 'Education level',
    type: 'text',
    required: true,
  },
  {
    id: 'work-place',
    label: 'Work place',
    type: 'text',
    required: true,
  },
  {
    id: 'speciality',
    label: 'Speciality',
    type: 'text',
    required: true,
  },
  {
    id: 'exp',
    label: 'Number of experience years',
    type: 'text',
    required: true,
  },
  {
    id: 'link',
    label: 'Link to portfolio or profile',
    type: 'text',
  },
];

const DoctorForm = ({ editable, setEditable }) => {
  const handleSubmit = () => {
    setEditable(false);
  };
  return (
    <>
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
    </>
  );
};

export default DoctorForm;
