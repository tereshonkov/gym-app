import Header from "@/components/Header/header";
import First from "@/components/FirstBlock/index";
import SecondBlock from "@/components/SecondBlock/index";
import BlockThree from "@/components/BlockThree/index";
import FourBlock from "@/components/FourBlock/index";
import FormBlock from "@/components/FormBlock/index";
import Footer from "@/components/Footer/index";

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
