import Image from "next/image";
import Overview from "./components/Overview";
import Matters from "./components/Matters";
import Encyclopedia from "./components/Encyclopedia";
import Strategies from "./components/Strategies";
import Stats from "./components/Stats";
import Header from "./components/Header";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-[url('/images/bg.png')] bg-fixed bg-cover space-y-20 pb-20 overflow-hidden`}
    >
      <Header />

      <Overview />
      <Stats />
      <Matters />
      <Strategies />

      <Encyclopedia />
    </main>
  );
}
