import Header from "@/components/Header/header";
import First from "@/components/FirstBlock/index";
import SecondBlock from "@/components/SecondBlock/index";

export default function Home() {
  return (
    <div className="w-full m-0 overflow-x-hidden">
      <Header />
      <First />
      <SecondBlock />
    </div>
  );
}
