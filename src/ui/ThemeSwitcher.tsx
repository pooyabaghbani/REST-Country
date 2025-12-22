import { Moon } from "lucide-react";

function ThemeSwitcher() {
  function handleSwitchTheme() {
    const rootElement = document.documentElement;
    // swith theme to light
    rootElement.classList.toggle("dark");
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
