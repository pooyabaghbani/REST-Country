import { Moon } from "lucide-react";
import { useEffect } from "react";

function ThemeSwitcher() {
  useEffect(() => {
    const rootElement = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      rootElement.classList.add("dark");
    }
  }, []);

  function handleSwitchTheme() {
    const rootElement = document.documentElement;
    // swith theme to light
    if (rootElement.classList.contains("dark")) {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <span
      className="flex gap-2 items-center cursor-pointer"
      onClick={handleSwitchTheme}
    >
      <Moon size={20} />
      Theme
    </span>
  );
}

export default ThemeSwitcher;
