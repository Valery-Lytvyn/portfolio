import { heroTitleData } from "../../../constants/homeSectionData";
import "./heroTitle.scss";

function HeroTitle() {
  return (
    <div className="heroTitle">
      <h2>{heroTitleData.helloText}</h2>
      <div className="heroTitleName">
        <h1>{heroTitleData.fullName.name}</h1>
        <h1>{heroTitleData.fullName.surname}</h1>
      </div>
      <div className="profession">
        <h2>{heroTitleData.profession}</h2>
      </div>
    </div>
  );
}

export default HeroTitle;
