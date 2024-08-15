import React, { useEffect, useState } from "react";
import "../App.css";
import { FaMoon ,FaSun} from "react-icons/fa";

function DarkMode() {
  const [theme, setTheme] = useState("dark-theme");
  const [dark,setDark] = useState(true)

  useEffect(() => { 
    document.body.className = theme;
   },[theme])

  const toggleDarkMode = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setDark(true)
    }
    else {
      setTheme('light-theme');
    }
  };

  return (
    <div
      className={`flex flex-wrap justify-center h-10 w-10 mt-2 items-center theme rounded-full`}
    >
      <button onClick={toggleDarkMode}>
        {theme === "dark-theme" ? (
          <FaSun className="h-8 w-8" />
        ) : (
          <FaMoon className="h-8 w-8" />
        )}
      </button>
    </div>
  );
}

export default DarkMode;