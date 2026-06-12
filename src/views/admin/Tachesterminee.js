import React from "react";
import CardTache from "components/Cards/CardTache";

export default function Taches() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-10/12 px-4 mx-auto">
          <CardTache />
        </div>
      </div>
    </>
  );
}
