import { Outlet } from "react-router";
import Header from "../ui/Header";

function Layout() {
  return (
    <div className="bg-very-light-gray text-sm">
      <div className="container mx-auto font-nunito-sans px-8">
        <Header />
        <main className="mt-8 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
