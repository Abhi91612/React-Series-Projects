import React from "react";
import { Sun, Moon } from "lucide-react"; // npm install lucide-react
import useTheme from "../contexts/Theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      {/* Background bar */}
      <div className="relative w-14 h-8 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-yellow-500 transition-colors duration-300">
        {/* Sliding circle */}
        <span
          className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md 
          flex items-center justify-center text-gray-700 
          transition-transform duration-300 peer-checked:translate"
        >
          {themeMode === "dark" ? (
            <Moon size={16} className="text-yellow-500" />
          ) : (
            <Sun size={16} className="text-blue-500" />
          )}
        </span>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-200">
        {themeMode === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}
