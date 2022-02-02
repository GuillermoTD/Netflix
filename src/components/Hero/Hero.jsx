import React from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero_description">
        <h1>Ver Infinity War ahora</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem perferendis accusamus tempora doloremque neque maxime
          explicabo, incidunt necessitatibus non dignissimos, facilis vitae
          totam obcaecati sit, maiores voluptate?
        </p>
        <div className="Hero_Button">
          <button className="Hero_Button_Play"><i class="fas fa-play"></i>Reproducir</button>
          <button className="Hero_Button_Information"><i class="fas fa-info-circle"></i>Más Información</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
