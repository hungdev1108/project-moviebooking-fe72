import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { getListFilmAction } from "../../redux/actions/FilmManagerActions";
import HomeMenu from "./HomeMenu/HomeMenu";

export default function Home(props) {
  const { lstFilm } = useSelector((state) => state.FilmManagerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListFilmAction());
  }, []);

  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <MultipleRowSlick lstFilm={lstFilm} />
        </div>
      </section>

      <HomeMenu />
    </div>
  );
}
