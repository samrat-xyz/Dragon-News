import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/LeftAside/LeftAside";
import RightAside from "../components/RightAside/RightAside";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <header>
        <Header />
        <section className="bg-[#F3F3F3] w-11/12 mx-auto my-2">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-2  p-2">
          <Navbar />
        </nav>
      </header>
      <main className="border w-11/12 mx-auto grid grid-cols-12 p-1">
        {/* left aside */}
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <div>
            <h1 className="text-lg font-bold text-center my-3">Dragon News Home</h1>
          </div>
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default RootLayout;
