import ReactPaginate from "react-paginate";
import { useFilms } from "../hooks/useFilms";
import { useShow } from "../hooks/useShow";
import DisplayFilms from "./DisplayFilms";
import NavBar from "./NavBar";

const Films = () => {
  const {
    dataFilms,
    pagesVisited,
    filmsPerPage,
    pageCount,
    changePage,
    search,
    handleChange,
    sortAlphabeticDataAsc,
    sortAlphabeticDataDesc,
    sortNumericDataAsc,
    sortNumericDataDesc,
    infoFilm,
    infoFilmData,
  } = useFilms();

  const { changeClick, click, openAnchor, handleClick, anchorEl, handleCloseAnchor } =
    useShow();
  return (
    <div className="card-container">
      <NavBar
        openAnchor={openAnchor}
        handleClick={handleClick}
        handleCloseAnchor={handleCloseAnchor}
        anchorEl={anchorEl}
        click={click}
        changeClick={changeClick}
        search={search}
        handleChange={handleChange}
        sortAlphabeticDataAsc={sortAlphabeticDataAsc}
        sortAlphabeticDataDesc={sortAlphabeticDataDesc}
        sortNumericDataAsc={sortNumericDataAsc}
        sortNumericDataDesc={sortNumericDataDesc}
      />
      <div className="cards">
        <DisplayFilms
          infoFilm={infoFilm}
          infoFilmData={infoFilmData}
          dataFilms={dataFilms}
          pagesVisited={pagesVisited}
          filmsPerPage={filmsPerPage}
        />
      </div>
      <div id="footer">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination-btns"}
          previousLinkClassName={"previous-btn"}
          nextLinkClassName={"next-btn"}
          activeClassName={"pagination-active"}
        />
      </div>
    </div>
  );
};

export default Films;
