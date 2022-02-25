import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export function Layout({ handleLogout, isRegistered, localEmail }) {
  return (
    <div className="page">
      <div className="content">
        <Header
        // handleLogout={handleLogout}
        // isRegistered={isRegistered}
        // localEmail={localEmail}
        />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
