import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useFilms } from "../hooks/useFilms";

const Films = () => {
  const { errorFilms, dataFilms, sortNumericData, sortData } = useFilms();

  const [pageNumber, setpageNumber] = useState(0);
  const filmsPerPage = 6;
  const pagesVisited = pageNumber * filmsPerPage;

  const displayFilms = dataFilms
    .slice(pagesVisited, pagesVisited + filmsPerPage)
    .map((film, i)=>(
      <Card id="card" key={i} sx={{ width: 345 }}>
            <CardMedia
              component="img"
              alt="studio ghibli films"
              height="200"
              image={film.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {film.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Director: {film.director} <br />
                Producer: {film.producer} <br />
                Release: {film.release_date} <br />
                Score: {film.rt_score}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
    ));

    const pageCount = Math.ceil(dataFilms.length / filmsPerPage);
    
    const changePage = ({selected}) =>{
      setpageNumber(selected)
    }
  return (
    <>
      <Button onClick={() => sortData()}>Title asc</Button>
      <Button
        value="score"
        onClick={(e) => {
          sortNumericData(e.target.value);
        }}
      >
        Score asc
      </Button>
      <Button
        value="release"
        onClick={(e) => {
          sortNumericData(e.target.value);
        }}
      >
        Release asc
      </Button>
      <div className="films-cards">
        {displayFilms}
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

    </>
  );
};

export default Films;
/*
dataFilms.map((film, i) => (
          <Card id="card" key={i} sx={{ width: 345 }}>
            <CardMedia
              component="img"
              alt="studio ghibli films"
              height="200"
              image={film.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {film.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Director: {film.director} <br />
                Producer: {film.producer} <br />
                Release: {film.release_date} <br />
                Score: {film.rt_score}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
*/