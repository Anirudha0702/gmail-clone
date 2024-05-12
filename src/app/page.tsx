import Image from "next/image";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="w-screen relative">
      <div className="flex w-full">
        <HamburgerMenu />
        <Header />
      </div>
      <Sidebar/>
    </main>
  );
}
