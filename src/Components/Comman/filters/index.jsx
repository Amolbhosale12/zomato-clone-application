import React from "react";
import "./Filter.css";
import FilterItem from "../filterItem";

const Filter = ({ filterList }) => {
  return (
    <div className="filters">
        {
            filterList && filterList.map((items)=>{
                return <FilterItem filter={items} key={items.id}/>
            })
        }
    </div>  
  );
};

export default Filter;
