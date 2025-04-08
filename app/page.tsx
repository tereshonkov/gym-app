import Header from "@/components/Header/header";
import First from "@/components/FirstBlock/FirstBlock";
import SecondBlock from "@/components/SecondBlock/SecondBlock";
import BlockThree from "@/components/BlockThree/BlockThree";
import FourBlock from "@/components/FourBlock/FourBlock";
import FormBlock from "@/components/FormBlock/FormBlock";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-full m-0 overflow-x-hidden">
      <Header />
      <First />
      <SecondBlock />
      <BlockThree />
      <FourBlock />
      <FormBlock />
      <Footer />
    </div>
  );
}
