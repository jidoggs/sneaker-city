import React from "react";
import GoodSneakers from "../component/home/GoodSneakers";
import Hero from "../component/home/Hero";
import HeroNewarrival from "../component/home/Newarrival";
import NewArrival from "../component/home/NewArrivalSection";

function Home() {
  return (
    <div>
      <Hero />
      <div
        style={{
          background: "transparent",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HeroNewarrival />
      </div>
      <NewArrival />
      <GoodSneakers />
    </div>
  );
}

export default Home;
