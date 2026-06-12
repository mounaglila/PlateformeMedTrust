// import React from "react";
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap justify-between">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats 
                  statTitle="Les Tâches en cours de traitement"
                  statLink="../admin/Taches" 
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats 
                  statTitle="Les Tâches terminées"
                  statLink="../admin/Taches"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats 
                  statTitle="Demande de tâche"
                  statLink="../admin/Accueil" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
