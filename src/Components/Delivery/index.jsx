import React from "react";
import "./Delivery.css";
import Filter from "../Comman/filters/index";
import DeliveryColleactions from "./DeliveryCollections/index"

const Delivery = () => {
  const filterList=[
    {
      id:1,
      title:"filters",
      icon:<i class="fi fi-rr-settings-sliders"></i>
    },
    {
      id:2,
      title:"Rating: 4.0+"
    },
    {
      id:3,
      title:"Pure Veg"
    },
    {
      id:4,
      title:"Cuisines",
      icon:<i class="fi fi-rs-angle-small-down"></i>
    }

  ];
  return (
    <div>
      <div className="max-width">
        <Filter filterList={filterList} />
      </div>
      <div >
        <DeliveryColleactions/>
      </div>
      This is Delivery
    </div>
  );
};

export default Delivery;
