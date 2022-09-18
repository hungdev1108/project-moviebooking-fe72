import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { getListFilmAction } from "../../redux/actions/FilmManagerActions";
import { getListCinemaSystem } from "../../redux/actions/MovieTheaterManagerActions";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeIntroduce from "./HomeIntroduce/HomeIntroduce";
import HomeMenu from "./HomeMenu/HomeMenu";
import HomeNews from "./HomeNews/HomeNews";

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
    <div className="">
      {" "}
      <HomeCarousel />
      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="py-16 mx-auto">
            <MultipleRowSlick lstFilm={lstFilm} />
          </div>
        </section>

        <HomeMenu movieTheaterSystem={movieTheaterSystem} />
        <HomeNews />
      </div>
      <HomeIntroduce />
    </div>
  );
}
