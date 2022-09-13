import React from "react";
import { useSelector } from "react-redux";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import HomeMenu from "./HomeMenu/HomeMenu";

export default function Home(props) {
  const { lstFilm } = useSelector((state) => state.FilmManagerReducer);

  //   const renderFilms = () => {
  //     return lstFilm.map((film, index) => {
  //       return <Film key={index} />;
  //     });
  //   };

  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <MultipleRowSlick lstFilm={lstFilm} />
          {/* <div className="flex flex-wrap -m-4">{renderFilms()}</div> */}
        </div>
      </section>

      <HomeMenu />
    </div>
  );
}
