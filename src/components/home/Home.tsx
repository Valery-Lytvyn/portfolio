import React from "react";
import MotionComponent from "../motionComponent/MotionComponent";
import HeroTitle from "./heroTitle/HeroTitle";
import {
  leftHorizontalVariant,
  scaleVariant,
} from "../../constants/motionComponentData";
import { MainColorContext } from "../../App";
import heroPhoto from "../../assets/images/mainPhoto.webp";
import "./home.scss";

function Home() {
  const mainColor = React.useContext(MainColorContext) as string;

  return (
    <section className="home">
      <div className="container">
        <MotionComponent
          content={<HeroTitle />}
          variant={leftHorizontalVariant}
        />
        <div className="heroImg">
          <MotionComponent
            content={
              <div
                className="imgWrap"
                style={{ border: `5px solid ${mainColor}` }}
              >
                <img src={heroPhoto} alt="hero" />
              </div>
            }
            variant={scaleVariant}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
