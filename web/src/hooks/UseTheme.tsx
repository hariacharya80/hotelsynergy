import { useEffect, useState } from "react";

function UseTheme() {
  //extracting the local storage to get value for initial theme data.
  const localTheme = localStorage.getItem("_theme");
  let isDark;
  if (localTheme === "true") {
    isDark = true;
  }

  //state to track the current theme applied to website.
  const [isDarkTheme, setIsDarkTheme] = useState(isDark || false);

  //function to update theme state as well as localstorage data.
  const switchTheme = () => {
    if (isDarkTheme) {
      localStorage.setItem("_theme", "false");
      setIsDarkTheme(false);
    } else {
      localStorage.setItem("_theme", "true");
      setIsDarkTheme(true);
    }
  };

  //function to return the current theme.
  const currentTheme = () => {
    if (isDarkTheme) return "dark";
    else return "light";
  };

  //effect for changing the actual theme everytime state updates.
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  //export both currentTheme and switch theme functions.
  return { currentTheme, switchTheme };
}

export default UseTheme;
