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

  const sortNumericData = (type) => {
   
    const types = {
      release: "release_date",
      score: "rt_score",
    }
    const sortProperty = types[type];
    const sorted = [...dataFilms].sort((a, b) => b[sortProperty] - a[sortProperty]);
    setDataFilms(sorted)
    /*const sort = dataFilms.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    setDataFilms(sort);
    console.log(sort)*/
  };

  const sortData = () => {
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
    console.log(sort)
  }


  return {
    dataFilms,
    errorFilms,
    sortNumericData,
    sortData,
  };
};
