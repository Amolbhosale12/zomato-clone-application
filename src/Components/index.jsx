import React, { useState } from "react";
import Header from "./Comman/header/index";
import Footer from "./Comman/footer/index";
import TabOptions from "./Comman/tabOptions/index";
import Delivery from "./Delivery/index";
import DiningOut from "./DiningOut/index.jsx";
import NightLife from './NightLife/index'

const CommanPage = () => {
  const [activeTab, SetActiveTab] = useState("");
  //arrow function
  const getCorrectScreen = (activeTab) => {
    switch (activeTab) {
      case "Delivery":
        return <Delivery />;
        break;
      case "Dining out":
        return <DiningOut />;
        break;

      case "Night life":
        return <NightLife/>
        break;

      default:
        return <div>Delivery Tab</div>;
    }
  };
  return (
    <div>
      <Header />
      <TabOptions />
      {/* {getCorrectScreen(activeTab)} */}
      <Footer />
    </div>
  );
};

export default CommanPage;
