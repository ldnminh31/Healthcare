import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DoctorForm from '../components/DoctorForm';
import PatientForm from '../components/PatientForm';

// 0 -> patient
// 1 -> doctor

const ProfilePage = () => {
  const [role, setRole] = useState(0);
  const [editable, setEditable] = useState(false);
  return (
    <div style={{ padding: '10px 10%' }}>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          fontSize: '25px',
          justifyContent: 'center',
        }}
      >
        <div>You are: </div>
        <select
          onChange={(e) => {setRole(parseInt(e.target.value)); setEditable(false)}}
          style={{ padding: '0 30px' }}
        >
          <option value={0}>Patient</option>
          <option value={1}>Doctor</option>
        </select>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h1 style={{ margin: 0 }}>Your profile</h1>
        <Button
          onClick={() => setEditable(true)}
          style={{ height: '40px', display: editable?"none":"block" }}
          variant="secondary"
        >
          <span style={{ marginRight: '3px' }}>Edit</span>
          <span
            style={{ position: 'relative', bottom: '2px', fontSize: '18px' }}
            className="iconify"
            data-inline="false"
            data-icon="mdi-light:pencil"
          ></span>
        </Button>
      </div>
      {role === 0 ? (
        <PatientForm editable={editable} setEditable={setEditable} />
      ) : (
        <DoctorForm editable={editable} setEditable={setEditable} />
      )}
    </div>
  );
};

export default ProfilePage;
