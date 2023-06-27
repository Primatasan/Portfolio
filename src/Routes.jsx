import SobreMimPage from "./components/SobreMimPage";
import Portfolio from "./components/Portfolio";
import DefautPage from "./components/DefaultPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RoutesApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefautPage />}>
          <Route index element={<SobreMimPage />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


