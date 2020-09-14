import React from "react";
import "./cards.scss";

const Cards = ({ nombreCard, categorias, queSeleccionamos }) => {
  return (
    <section className="card-container">
      {categorias.map((cuenta, i) => {
        return (
          <div className="card" key={i}>
            <button
               onClick={(e) => queSeleccionamos(cuenta)}
            >
                {cuenta}
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;

{
  /* <div className="card">
<p>{nombreCard}</p>
</div> */
}
