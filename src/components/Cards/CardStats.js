import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardStats({ statTitle, statLink }) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <Link to={statLink} className="font-semibold text-xl text-blueGray-700 hover:underline">
                {statTitle}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardStats.propTypes = {
  statTitle: PropTypes.string.isRequired,
  statLink: PropTypes.string.isRequired,
};
