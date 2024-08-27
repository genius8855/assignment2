import Image from "next/image";
import Component from "./components/component";
import Header from "./components/header";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import Product from "./components/product";
import Content from "./components/content";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import DoubleRangeSlider from "./components/slider";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <SecondSection/>
      <ThirdSection/>
      
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
      
      <Footer />
      
     

      
    </div>
  );
}
