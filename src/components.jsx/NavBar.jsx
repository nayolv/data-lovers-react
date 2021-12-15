import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import SearchInput from "./SearchInput";

const NavBar = ({
  search,
  handleChange,
  sortAlphabeticDataAsc,
  sortAlphabeticDataDesc,
  sortNumericDataAsc,
  sortNumericDataDesc,
}) => {
  return (
    <nav>
       <ButtonGroup variant="text" aria-label="text button group">
        <Button 
        onClick={() => sortAlphabeticDataAsc()}
      >
        TITLE A-Z</Button>
        <Button
        onClick={() => sortAlphabeticDataDesc()}
      >
        TITLE Z-A</Button>
        <Button value="score"
        onClick={(e) => {
          sortNumericDataAsc(e.target.value);
        }}
      >
        HIGH SCORE</Button>
        <Button value="scoreDesc"
        onClick={(e) => {
          sortNumericDataDesc(e.target.value);
        }}
      >
        LOW SCORE</Button>
        <Button value="release"
        onClick={(e) => {
          sortNumericDataAsc(e.target.value);
        }}
      >
        RECENT RELEASE</Button>
        <Button value="releaseDesc"
        onClick={(e) => {
          sortNumericDataDesc(e.target.value);
        }}
      >
        OLD RELEASE</Button>
      </ButtonGroup>

      <SearchInput search={search} handleChange={handleChange} />
    </nav>
  );
};

export default NavBar;
/*
 <nav>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={() => sortAlphabeticDataAsc()}>TITLE A-Z</Button>
          <Button onClick={() => sortAlphabeticDataDesc()}>TITLE Z-A</Button>
          <Button
            value="score"
            onClick={(e) => {
              sortNumericDataAsc(e.target.value);
            }}
          >
            HIGH SCORE
          </Button>
          <Button
            value="scoreDesc"
            onClick={(e) => {
              sortNumericDataDesc(e.target.value);
            }}
          >
            LOW SCORE
          </Button>
          <Button
            value="release"
            onClick={(e) => {
              sortNumericDataAsc(e.target.value);
            }}
          >
            RECENT RELEASE
          </Button>
          <Button
            value="releaseDesc"
            onClick={(e) => {
              sortNumericDataDesc(e.target.value);
            }}
          >
            OLD RELEASE
          </Button>
        </ButtonGroup>
        <SearchInput dataFilms={dataFilms} />
      </nav>
*/
