import React from "react";
import CardAccueil from "components/Cards/CardAccueil.js";

export default function Accueil() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-10/12 px-4 mx-auto">
          <CardAccueil />
        </div>
      </div>
    </>
  );
}
