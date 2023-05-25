import { GridLoader } from "react-spinners";
import "./loader.scss";

function Loader({ color }: { color: string }) {
  return (
    <div className="loader">
      <GridLoader color={color} size={10} />
    </div>
  );
}

export default Loader;
