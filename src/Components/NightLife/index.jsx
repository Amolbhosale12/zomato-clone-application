import React from "react";
import "./NightLife.css";
import Collection from "../Comman/Collection/index";
import Filter from "../Comman/filters/index";
import { nightLifeRestaurants } from "../../data/nightLifeRestaurants";
import ExploreItems from "../Comman/exploreSection/index";

const nightLiferestaurantList=nightLifeRestaurants;
const collectionList = [
  {
    id: 1,
    title: "Newly Opened Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923155.png",
    places: "12 places",
  },
  {
    id: 2,
    title: "Best in Pune",
    cover:
      "https://b.zmtcdn.com/data/collections/2a82bf4ab91f34f1c7d5343a22c27446_1702459284.png",
    places: "23 places",
  },
  {
    id: 3,
    title: "Serene Rooftop Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg",
    places: "12 places",
  },
  {
    id: 4,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/b002ac3dedef51dd605505656450b099_1696922552.jpg",
    places: "16 places",
  },
  {
    id: 5,
    title: "Romantic Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674839220.jpg",
    places: "17 places",
  },
  {
    id: 6,
    title: "Blissful Breakfast Places",
    cover:
      "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054253.jpg",
    places: "20 places",
  },
  {
    id: 7,
    title: "Best Insta-worthy Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/fbe01413b99e6a071af5211d569e7ab6_1691566585.jpeg",
    places: "13 places",
  },
  {
    id: 8,
    title: "Pizza On My Mind",
    cover:
      "https://b.zmtcdn.com/data/collections/68113c6bddb038ac936a1f63bcf5262e_1707387455.png",
    places: "12 places",
  },
];

const NightLifeFilterList = [
  {
    id: 1,
    title: "filters",
    icon: <i class="fi fi-rr-settings-sliders"></i>,
  },
  {
    id: 2,
    title: "Gold",
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
    id:4,
    title:"Pubs & Bars"
  }
];

const NightLife = () => {
  return (
    <div>
      <div>
        <Collection list={collectionList} />
      </div>
      <div className="max-width">
        <Filter filterList={NightLifeFilterList} />
        <ExploreItems list={nightLiferestaurantList} collectionName="Nightlife Restaurants in Pune"/>
      </div>
    </div>
  );
};

export default NightLife;
