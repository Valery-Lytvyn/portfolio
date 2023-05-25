import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import colorSwatchIcon from "../../assets/icon/color-swatch.png";
import { colorPalette } from "../../constants/colorsConstants";
import "./colorSwatch.scss";

interface ColorSwatchProps {
  changeColor: (color: string) => {};
}

function ColorSwatch({ changeColor }: ColorSwatchProps) {
  const [showPalette, setShowPalette] = useState(false);
  const [isMouseLeave, setIsMouseLeave] = useState(false);

  const clickHandler = (color: string) => {
    changeColor(color);
    setShowPalette(false);
  };

  useEffect(() => {
    if (isMouseLeave) {
      const timer = setTimeout(() => setShowPalette(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [isMouseLeave]);

  return (
    <div className="colorSwatch">
      <button
        className="iconBtn  colorSwatchIcon"
        onClick={() => setShowPalette((prev) => !prev)}
        aria-label={"color Swatch"}
      >
        <img src={colorSwatchIcon} alt={"icon color swatch"} />
      </button>
      <AnimatePresence>
        {showPalette && (
          <div className="modalRear" onClick={() => setShowPalette(false)}>
            <motion.div
              className="palette"
              initial={{ x: "6rem" }}
              animate={{ x: "0rem" }}
              exit={{ x: "6rem" }}
              transition={{ duration: 1 }}
              onMouseLeave={() => setIsMouseLeave(true)}
              onMouseEnter={() => setIsMouseLeave(false)}
            >
              {colorPalette.map((color, index) => (
                <div
                  className="colorMark"
                  style={{ background: color }}
                  onClick={() => clickHandler(color)}
                  key={index}
                ></div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ColorSwatch;
