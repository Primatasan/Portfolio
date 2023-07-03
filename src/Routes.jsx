import SobreMimPage from "./components/SobreMimPage";
import Portfolio from "./components/Portfolio";
import DefautPage from "./components/DefaultPage";
import Post from "./components/Post";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTotop";


export default function RoutesApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefautPage />}>
          <Route index element={<SobreMimPage />}/>
          <Route path="portfolio" element={<Portfolio />}/>
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}


