import React from "react";
import "./ExploreSection.css";
import ExploreCard from "./exploreCard";
const ExploreSection = ({ list, collectionName }) => {
  return (
    <div>
      <div className="max-width explore-section">
        <div className="collection-title delivery-heading">
          {collectionName}
        </div>
        <div className="explore-grid max-width">
          {
            list.map((item)=>{
              const restId=item?.resId ?? "";
              return (
                <div className="sub-max-width">
                  <ExploreCard restaurant={item} key={restId} />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
