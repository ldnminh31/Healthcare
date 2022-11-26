import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParam } from "react-use";
import DoctorForm from "../components/DoctorForm";
import { MediacalForm } from "../components/MedicalForm";
import PatientForm from "../components/PatientForm";

const SearchPage = () => {
  const history = useSearchParam("history");

  const [currentPatientAddress, setCurrentPatientAddress] = useState("");
  const [medicalHistory, setMedicalHistory] = useState([]);

  const [role, setRole] = useState("0");

  const [profile, setProfile] = useState();

  const handleChangeAddress = (e) => {
    setCurrentPatientAddress(e.target.value);
  };

  const handleClickSearch = () => {};

  return (
    <>
      <div className="d-flex mt-5 justify-content-center">
        <div class="input-group w-25 me-5">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={currentPatientAddress}
            onChange={handleChangeAddress}
          />
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={handleClickSearch}
          >
            search
          </button>
        </div>
        <select
          class="form-select w-25"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="0">Patient</option>
          <option value="1">Doctor</option>
        </select>
      </div>
      {history !== null && (
        <MediacalForm />
      )}
      {history === null &&
        (role === "0" ? (
          <PatientForm editable={false} isShowMedicalList />
        ) : (
          <DoctorForm editable={false} />
        ))}
    </>
  );
};

export default SearchPage;
