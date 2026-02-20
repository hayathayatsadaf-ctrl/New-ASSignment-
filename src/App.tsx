import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero/Hero";
import Doctar from "./Doctar";
import Preview from "./Preview";
import FRAME from "./Frame/FRAME"
import Testi from "./test/testi";
import Treatment from "./Tretment/Treatment";
import Why from "./Why/Why";
import About from "./about/About";
import Consult from "./consult/Consaltant";
import Footer from "./footer/Footer";



export default function App() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <Navbar onOpenPreview={() => setPreviewOpen(true)} />
      <Hero onOpenPreview={() => setPreviewOpen(true)} />
      <Doctar />

      <Preview
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        bgImage="/about%20(1).jpg"
      />
      <FRAME/>

      <Testi/>

        <Treatment />

        <Why/>

        <About/>
      <Consult/>
      <Footer/>


    </>
  );
}




