import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const DisplayFilms = ({ dataFilms, pagesVisited, filmsPerPage }) => {
  const displayFilms = dataFilms.slice(
    pagesVisited,
    pagesVisited + filmsPerPage
  );

  return (
    <>
      {displayFilms.map((film) => (
        <div className="card" key={film.id}>
        <img className="card-img-top" src={film.image} alt="ghibli films" />
        <div className="card-body">
        <h5 className="card-title">{film.title}</h5>
          <p className="card-text">Director: {film.director}</p>
          <p className="card-text">Producer: {film.producer}</p>
          <p className="card-text">Release: {film.release_date}</p>
          <p className="card-text">Score: {film.rt_score}</p>
        </div>
        <button type="button" class="btn btn-link">More Info</button>
      </div>
      ))}
    </>
  );
};

export default DisplayFilms;
/*
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
                        
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
*/
