import ModalContainer from "./Modal";
import { useShow } from "../hooks/useShow";
import {
  Button,
  Card,
  CardMedia,
} from "@mui/material";
const DisplayFilms = ({ dataFilms, pagesVisited, filmsPerPage, infoFilm, infoFilmData }) => {
  const { open, handleClose, handleOpen } = useShow();
  const displayFilms = dataFilms.slice(
    pagesVisited,
    pagesVisited + filmsPerPage
  );

 
  return (
    <>
      {displayFilms.map((film) => (
        <Card className="card" key={film.id} sx={{ width: 300 }}>
          <CardMedia
            component="img"
            alt="studio ghibli films"
            image={film.image}
          />
          <section>
            <h3>
              {film.title}
            </h3>
            <p>
             <b>Director:</b> {film.director}
            </p>
            <p >
              <b>Release:</b> {film.release_date}
            </p>
            <p>
             <b>Score:</b> {film.rt_score}
            </p>
          </section>
          <section>
            <Button
              size="small"
              onClick={() => {
                handleOpen();
                infoFilmData(film.title, film.description);
              }}
            >
              Learn More
            </Button>
          </section>
        </Card>
      ))}
      <ModalContainer open={open} handleClose={handleClose} content={infoFilm.description} film={infoFilm.film}/>
    </>
  );
};

export default DisplayFilms;