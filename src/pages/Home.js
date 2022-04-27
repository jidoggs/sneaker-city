import React, { useEffect, useState } from "react";
import GoodSneakers from "../component/home/GoodSneakers";
import Hero from "../component/home/Hero";
import HeroNewarrival from "../component/home/Newarrival";
import NewArrival from "../component/home/NewArrivalSection";
import useWindowSize from "../hooks/useWindowSize";

function Home() {
  const {width} = useWindowSize();
  const [showHeroArrival, setShowHeroArrival] = useState(true)

  useEffect(() => {
    if (width <= 796 && showHeroArrival === true) {
      setShowHeroArrival(false)
    }
    if (width > 796 && showHeroArrival === false) {
      setShowHeroArrival(true)
    }

  }, [width]) //eslint-disable-line
  return (
    <div>
      <Hero />
      {showHeroArrival && <div
        style={{
          background: "transparent",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HeroNewarrival />
      </div>}
      <NewArrival />
      <GoodSneakers />
    </div>
  );
}

export default Home;
