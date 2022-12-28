import React, { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function changeTheme() {
    if (localStorage.theme === "light") {
      setTheme("dark");
      localStorage.theme = "dark";
    } else {
      setTheme("light");
      localStorage.theme = "light";
    }
  }

  return { theme, changeTheme };
}

export { useTheme };
