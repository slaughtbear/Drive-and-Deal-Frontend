import CarCard from "./CarCard";
import React from "react";

/* Componente que se utiliza para renderizar un array que contiene
   los autos registrados en la base de datos en un layout de 4 columnas. 
*/
const CarList = ({ cars }) => (
  <div className="grid grid-cols-4 gap-4">
    {cars.map((car, i) => {
      return <CarCard car={car} key={i} />;
    })}
  </div>
);


export default CarList;
