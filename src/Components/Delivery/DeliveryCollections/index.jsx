import React from "react";
import "./DeliveryCollections.css";
import NextArrow from "../../Comman/carousel/nextArrow";
import PrevArrow from "../../Comman/carousel/prevArrow";
import Slider from "react-slick";
import DeliveryItem from "./deliveryItem/index";

const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 3,
    title: "Chicken",
    cover:
      "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
  },
  {
    id: 4,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 5,
    title: "Thali",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
  {
    id: 6,
    title: "Fried Rice",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
  },
  {
    id: 7,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    id: 8,
    title: "North Indian",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
  },
  {
    id: 9,
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
  },
  {
    id: 10,
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  },
  {
    id: 11,
    title: "Dosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  },
  {
    id: 12,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
];
const deliveryBrandItems=[
    {
        id:1,
        title:"Burger King",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png"

    },
    {
        id:2,
        title:"Subway",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png"

    },
    {
        id:3,
        title:"Irani Cafe",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/05a2c24a8de3f8fe07fc46a07fdbba99_1611576819.png"

    },
    {
        id:4,
        title:"Theobroma",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179363.png"
    },
    {
        id:5,
        title:"Chitale Bandhu Mithaiwale",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/b7dc8cd85894eb89c1eed35b81fc5c9b_1605067995.png"
    },
    {
        id:6,
        title:"Faasos - Wraps & Rolls",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655798578.png"
    },
    {
        id:7,
        title:"The Belgian Waffle Co.",
        cover:"	https://b.zmtcdn.com/data/brand_creatives/logos/7c26cec5328c49e583876f3d0a747623_1707139054.png"
    },
    {
        id:8,
        title:"Haidiram's Restaurant",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/d3c593271933bba9027ab27e60e7e9c9_1605068098.png"
    },
    {
        id:9,
        title:"CakeZone Patisserie",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/50760f50e2c9d1220c3c98e5a32eba28_1661167098.png"
    }
]

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryColleactions = () => {
    
  return (
    <div className="delivery-collections">
      <div className=" delivery-collections-wrapper max-width">
        <div className="delivery-heading absolute-left">
          Inspiration for your first order
        </div>
        <div className="delivery-img-container">
          <Slider {...settings}>
            {deliveryItems.map((items) => {
              return <DeliveryItem item={items} />;
            })}
          </Slider>
        </div>
      </div>
      <div >
        <div className=" delivery-collections-wrapper max-width">
          <div className="delivery-heading absolute-left">
            Top brands for you
          </div>
          <div className="delivery-img-container">
            <Slider {...settings}>
              {deliveryBrandItems.map((items) => {
                return <DeliveryItem item={items} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default DeliveryColleactions;
