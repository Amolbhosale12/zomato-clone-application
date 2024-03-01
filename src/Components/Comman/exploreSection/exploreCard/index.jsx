import React from "react";
import "./ExploreCard.css";

const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => {
      return item.name;
    })
    .slice(0, 2);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff =
    offers.length > 1
      ? offers[0].text
      : offers.length === 1
      ? offers[0].text
      : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore-card cursor-pointer">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        <div className="delivery-time">{deliveryTime} </div>
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row top-row-align">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating}
            <i className="fi fi-rr-star absolute-center ms-1"></i>
          </div>
        )}
      </div>
      <div className="res-row ">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => {
              return (
                <div>
                  <span className="res-cuisine-tag">
                    {item}
                    {i !== cuisines.length - 1 && ","}
                  </span>
                </div>
              );
            })}
          </div>
        )}
        {approxPrice && <div className="approx-price">{approxPrice}</div>}
      </div>
      <div className="explore-bottom">
        <div className="explore-bottom-seperator"></div>
        <div>
          {bottomContainers && (
            <div>
              {bottomContainers.map((item) => {
                return (
                  <div className="d-flex ">
                    <div className="explore-image-container">
                      <img src={item?.image?.url} alt={item?.text} className="explore-image"  />
                    </div>
                    <div className="explore-bottom-text">{item?.text}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ExploreCard;
