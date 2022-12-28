import React from "react";
import { Link } from "react-router-dom";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { changeTheme, theme } = useTheme();

  const isToggled = theme === "light";

  return (
    <div className="w-full py-6 px-6 bg-white flex justify-center items-center shadow dark:bg-gray-700">
      <nav className="max-w-6xl w-full flex justify-between items-center text-gray-900">
        <Link to="/" className="font-bold dark:text-gray-100">
          Where's in the world
        </Link>

        <Expand
          toggled={isToggled}
          toggle={changeTheme}
          forceMotion={true}
          className=" text-2xl dark:text-gray-100"
        />
      </nav>
    </div>
  );
}

export default Navbar;
