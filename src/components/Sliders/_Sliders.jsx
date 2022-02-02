import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import axios from "axios";

// Import Swiper React components

export default function Sliders() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // async function get_movies() {
    //   const options = {
    //     method: 'GET',
    //     url: 'https://imdb8.p.rapidapi.com/auto-complete',
    //     params: {q: 'game of thr'},
    //     headers: {
    //       'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    //       'x-rapidapi-key': 'ef3a616d00msh73ee65bbbd24a68p1ee452jsn4563f272b759'
    //     }
    //   };
      
    //   const data = axios.request(options).then(async function (response) {
    //     const result = response.data.d
    //     setMovies(result)
    //     console.log(movies)
    
    //   }).catch(function (error) {
    //     console.error(error);
    //   });
    // }
    // get_movies();

  }, []);

  return (
    <div className="Sliders">
      <div className="Sliders_Item">
        <h3>Populares en netflix</h3>
        <Slider movies={movies}/>
      </div>
     

      <div className="Sliders_Item">
        <h3>Tendencias</h3>
        <Slider movies={movies}/>
      </div>

      <div className="Sliders_Item">
        <h3>Continuar viendo contenido de usuario</h3>
        <Slider movies={movies}/>
      </div>

    </div>
  );
}
