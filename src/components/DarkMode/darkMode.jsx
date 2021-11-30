import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  if(setIsDarkMode === true){
      
  }
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
    />
  );
};