import { useContext } from "react";
import { ThemeContext } from "../store/myThemeContext";



function ThemeToggle() {

const{isDarkMode, toggleTheme} = useContext(ThemeContext)
  return (
    <button
      onClick={toggleTheme}
      className='fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full z-[99]'>
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
