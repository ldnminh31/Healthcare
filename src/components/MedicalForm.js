import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FORM_SCHEMA = [
  {
    id: "symtom",
    label: "Symtom",
    type: "text",
    required: true,
  },
  {
    id: "diseaseName",
    label: "Disease name",
    type: "text",
    required: true,
  },
  {
    id: "diseaseDescription",
    label: "Disease description",
    type: "text",
  },
  {
    id: "treatmentInfo",
    label: "Treatment info",
    type: "email",
  },
  {
    id: "treatmentResult",
    label: "Treatment result",
    type: "text",
    required: true,
  },
  {
    id: "diseaseStatus",
    label: "Disease status",
    type: "text",
    required: true,
  },
  {
    id: "documentLink",
    label: "Document link",
    type: "text",
    required: true,
  },
];

export const MediacalForm = () => {
  const [medical, setMedical] = useState({});

  console.log(FORM_SCHEMA);
  return (
    <div>
      <Form>
        {FORM_SCHEMA.map((item) => (
          <Form.Group className="mb-3" controlId={item.id}>
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
              required={item?.required}
              as={item.type === "textarea" ? item.type : "input"}
              type={item.type}
            />
          </Form.Group>
        ))}
      </Form>
    </div>
  );
};
