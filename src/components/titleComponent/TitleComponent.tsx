import MotionComponent from "../motionComponent/MotionComponent";
import {
  leftHorizontalVariant,
  rightHorizontalVariant,
} from "../../constants/motionComponentData";
import "./titleComponent.scss";

interface TitleComponentProps {
  title: string;
  subTitle: string;
}
function TitleComponent({ title, subTitle }: TitleComponentProps) {
  return (
    <div className="titleWrap">
      <MotionComponent
        content={
          <div className="title">
            <h2>{title}</h2>
          </div>
        }
        variant={leftHorizontalVariant}
      />
      <MotionComponent
        content={
          <div className="subTitle">
            <h3>{subTitle}</h3>
          </div>
        }
        variant={rightHorizontalVariant}
      />
    </div>
  );
}

export default TitleComponent;
