import { TextField } from "@mui/material";
import React from "react";

const SearchInput = ({ search, handleChange }) => {

  return (
    <div className="input-search-container">
      <TextField
        className="customSelect"
        label="Search by name"
        variant="filled"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;