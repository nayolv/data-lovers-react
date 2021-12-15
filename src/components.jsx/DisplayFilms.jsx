import React, { useState } from "react";
import ModalContainer from "./Modal";
import { useShow } from "../hooks/useShow";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const DisplayFilms = ({ dataFilms, pagesVisited, filmsPerPage }) => {
  const { open, handleOpen, handleClose } = useShow();
  const displayFilms = dataFilms.slice(
    pagesVisited,
    pagesVisited + filmsPerPage
  );

  const [infoFilm, setinfoFilm] = useState({
    film: "",
    description: ""
  });

  return (
    <>
      {displayFilms.map((film) => (
        <Card className="card" key={film.id} sx={{ width: 300 }}>
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
              Director: {film.director}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Release: {film.release_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Score: {film.rt_score}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                handleOpen();
                setinfoFilm({
                  film: film.title,
                  description: film.description
                });
              }}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
      <ModalContainer open={open} handleClose={handleClose} content={infoFilm.description} film={infoFilm.film}/>
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
