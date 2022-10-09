import { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useState";
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true);
  const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]);

  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const pressedTexture = Object.entries({ dirt, grass, glass, wood, log }).find(
      ([_, pressed]) => pressed
    );
    console.log(pressedTexture);
    if (pressedTexture) {
      console.log(pressedTexture);
      setTexture(pressedTexture[0]);
    }
  }, [dirt, grass, glass, wood, log]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);
    return () => clearTimeout(visibilityTimeout);
  }, [activeTexture]);

  console.log(visible)

  return (
    visible && (
      <div className="absolute centerd z-index-1">
        {Object.entries(images).map(([k, src]) => (
          <img
            key={k}
            src={src}
            alt={k}
            className={`h-16 w-16 m-2 rounded-full border-2 ${
              activeTexture === k ? "border-blue-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    )
  );
};
