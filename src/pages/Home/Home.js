import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { getListFilmAction } from "../../redux/actions/FilmManagerActions";
import { getListCinemaSystem } from "../../redux/actions/MovieTheaterManagerActions";
import HomeMenu from "./HomeMenu/HomeMenu";

export default function Home(props) {
  const { lstFilm } = useSelector((state) => state.FilmManagerReducer);
  console.log("FILM:", lstFilm);
  const { movieTheaterSystem } = useSelector((state) => state.MovieTheaterManagerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListFilmAction());
    dispatch(getListCinemaSystem());
  }, []);

  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <MultipleRowSlick lstFilm={lstFilm} />
        </div>
      </section>

      <HomeMenu movieTheaterSystem={movieTheaterSystem} />
    </div>
  );
}
