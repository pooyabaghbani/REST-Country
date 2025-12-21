import { Moon } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between h-20 items-center shadow-md bg-white dark:bg-dark-blue">
      <h1 className="font-medium text-xl">Where is the world?</h1>
      {/* Impelement theme switch */}
      <p className="flex gap-2 items-center">
        <Moon size={20} />
        Theme
      </p>
    </header>
  );
}

export default Header;
