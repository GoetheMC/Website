import { useEffect, useState } from "react";

export function useBackgroundColor() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkBackgroundColor = () => {
      const backgroundColor = getComputedStyle(document.body).backgroundColor;
      const rgb = backgroundColor.match(/\d+/g);
      if (rgb) {
        const brightness =
          (parseInt(rgb[0]) * 299 +
            parseInt(rgb[1]) * 587 +
            parseInt(rgb[2]) * 114) /
          1000;
        setIsDark(brightness < 128);
      }
    };

    checkBackgroundColor();
    window.addEventListener("resize", checkBackgroundColor);
    return () => window.removeEventListener("resize", checkBackgroundColor);
  }, []);

  return isDark;
}
