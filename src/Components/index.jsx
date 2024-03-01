import React, { useState } from "react";
import Header from "./Comman/header/index";
import Footer from "./Comman/footer/index";
import TabOptions from "./Comman/tabOptions/index";
import Delivery from "./Delivery/index";
import DiningOut from "./DiningOut/index.jsx";
import NightLife from "./NightLife/index";

const CommanPage = () => {
  const [activeTab, setActiveTab] = useState("Dining Out");
  //arrow function
  const getCorrectScreen = (activeTab) => {
    switch (activeTab) {
      case "Delivery":
        return <Delivery />;
        break;
      case "Dining Out":
        return <DiningOut />;
        break;

      case "Nightlife":
        return <NightLife />;
        break;

      default:
        return <div>Delivery Tab</div>;
    }
  };
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};
export default CommanPage;
