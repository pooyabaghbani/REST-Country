import { Outlet } from "react-router";
import Header from "../ui/Header";

function Layout() {
  return (
    <div className="bg-very-light-gray text-sm dark:bg-very-dark-blue dark:text-white">
      <div className="max-w-360 font-nunito-sans px-8 mx-auto">
        <Header />
        <main className="mt-8 pt-32">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
