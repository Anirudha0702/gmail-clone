import Image from "next/image";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";

export default function Home() {
  return (
    <main className="w-svw relative h-svh flex ">
      <Sidebar />
    </main>
  );
}
