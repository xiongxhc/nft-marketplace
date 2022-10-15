import React from "react";
import AuthorProfile from "./AuthorProfile";
import CollectionCard from "./CollectionCard";
import Pagination from "./Pagination";

const CollectionArea = ({ data, dataCount }) => {
  return (
    <>
      <div className="collection-widget-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <AuthorProfile />
            </div>

            <div className="col-lg-9">
              <div className="row justify-content-center">
                {data &&
                  data.map((d) => <CollectionCard key={d.id} data={d} />)}
              </div>

              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionArea;
