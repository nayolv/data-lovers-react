import React from "react";

const NavBar = ({ sortAlphabeticDataAsc, sortAlphabeticDataDesc, sortNumericDataAsc, sortNumericDataDesc}) => {
  return (
    <nav id="nav-bar" className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => sortAlphabeticDataAsc()}
      >
        TITLE A-Z
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => sortAlphabeticDataDesc()}
      >
        TITLE Z-A
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        value="score"
        onClick={(e) => {
          sortNumericDataAsc(e.target.value);
        }}
      >
        HIGH SCORE
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        value="scoreDesc"
        onClick={(e) => {
          sortNumericDataDesc(e.target.value);
        }}
      >
        LOW SCORE
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        value="release"
        onClick={(e) => {
          sortNumericDataAsc(e.target.value);
        }}
      >
        RECENT RELEASE
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        value="releaseDesc"
        onClick={(e) => {
          sortNumericDataDesc(e.target.value);
        }}
      >
        OLD RELEASE
      </button>
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
