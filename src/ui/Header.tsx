import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="h-20 shadow-md bg-white dark:bg-dark-blue fixed right-0 left-0 top-0 z-50">
      <div className="flex justify-between items-center h-full max-w-360 mx-auto px-8">
        <h1 className="font-medium text-xl">Where is the world?</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
