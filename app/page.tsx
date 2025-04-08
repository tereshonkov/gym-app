import Header from "@/components/Header/header";
import First from "@/components/FirstBlock/Index";
import SecondBlock from "@/components/SecondBlock/Index";
import BlockThree from "@/components/BlockThree/Index";
import FourBlock from "@/components/FourBlock/Index";
import FormBlock from "@/components/FormBlock/Index";
import Footer from "@/components/Footer/Index";

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
