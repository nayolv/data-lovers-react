import { useEffect, useState } from "react";

export const useFilms = () => {
  const [dataFilms, setDataFilms] = useState([]);
  const [errorFilms, setErrorFilms] = useState(null);
  useEffect(() => {
     fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => {
        setDataFilms(data);
      })
      .catch((err) => {
        console.error("Existe un error", err);
        setErrorFilms(err);
      });
  }, []);

  const sortNumericDataAsc = (type) => {
    const types = {
      release: "release_date",
      score: "rt_score",
    };
    const sortProperty = types[type];
    const sorted = [...dataFilms].sort(
      (a, b) => b[sortProperty] - a[sortProperty]
    );
    setDataFilms(sorted);
  };
  const sortNumericDataDesc = (type) => {
    const types = {
      releaseDesc: "release_date",
      scoreDesc: "rt_score",
    };
    const sortProperty = types[type];
    const sorted = [...dataFilms].sort(
      (a, b) => a[sortProperty] - b[sortProperty]
    );
    setDataFilms(sorted);
  };

  const sortAlphabeticDataAsc = () => {
    const sort = [...dataFilms].sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    setDataFilms(sort);
  };
 const sortAlphabeticDataDesc = () => {
    const sort = [...dataFilms].sort(function (a, b) {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    });
    setDataFilms(sort);
  };

  const [pageNumber, setpageNumber] = useState(0);
  const filmsPerPage = 8;
  const pagesVisited = pageNumber * filmsPerPage;
  const pageCount = Math.ceil(dataFilms.length / filmsPerPage);

  const changePage = ({ selected }) => {
    setpageNumber(selected);
  };
  return {
    dataFilms,
    errorFilms,
    sortNumericDataAsc,
    sortNumericDataDesc,
    sortAlphabeticDataAsc,
    sortAlphabeticDataDesc,
    pagesVisited,
    pageCount,
    changePage,
    filmsPerPage,
  };
};