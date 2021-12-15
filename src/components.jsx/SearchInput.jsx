import { TextField } from "@mui/material";
import React from "react";

const SearchInput = ({ search, handleChange }) => {
  return (
    <div className="input-search-container">
        <TextField
          id="search-input"
          label="Busqueda por nombre"
          variant="outlined"
          value={search}
          onChange={handleChange}
        />
    </div>
  );
};

export default SearchInput;
/*
<input 
      className="form-control inputBuscar"
      value={search}
      placeholder="Busqueda por nombre"
      onChange={handleChange}
      />
      */
