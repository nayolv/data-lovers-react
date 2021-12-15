import { Button, ButtonGroup } from "@mui/material";
import ReactPaginate from "react-paginate";
import { useFilms } from "../hooks/useFilms";
import DisplayFilms from "./DisplayFilms";
import NavBar from "./NavBar";
import SearchInput from "./SearchInput";

const Films = () => {
  const {
    errorFilms,
    search,
    handleChange,
    dataFilms,
    cardsFilms,
    sortNumericDataAsc,
    sortNumericDataDesc,
    sortAlphabeticDataAsc,
    sortAlphabeticDataDesc,
    pagesVisited,
    filmsPerPage,
    pageCount,
    changePage,
  } = useFilms();

  return (
    <div className="films-container">
      <NavBar
        handleChange={handleChange}
        search={search}
        sortNumericDataAsc={sortNumericDataAsc}
        sortNumericDataDesc={sortNumericDataDesc}
        sortAlphabeticDataAsc={sortAlphabeticDataAsc}
        sortAlphabeticDataDesc={sortAlphabeticDataDesc}
      />

      <div className="films-cards">
        <DisplayFilms
          dataFilms={dataFilms}
          cardsFilms={cardsFilms}
          pagesVisited={pagesVisited}
          filmsPerPage={filmsPerPage}
        />
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Films;
