import SobreMimPage from "./components/SobreMimPage";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function RoutesApp() {

  return (
    <BrowserRouter>
      <Menu />
      <Header />
      <Routes path="/">
        <Route path="/" element={<SobreMimPage />}/>
        <Route path="/portfolio" element={<div>teste 02</div>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


