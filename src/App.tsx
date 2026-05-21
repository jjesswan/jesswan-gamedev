import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navigation";
import Work from "./components/WorkPages/Work";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./styles/theme";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Main from "./components/Main";
import WorkPage from "./components/WorkPages/WorkPage_Template";
import WorkPage_Cobblestone from "./components/WorkPages/ProjectPages/WorkPage_Cobblestone";
import WorkPage_Xiang from "./components/WorkPages/ProjectPages/WorkPage_Xiang";
import WorkPage_OriginTwo from "./components/WorkPages/ProjectPages/WorkPage_OriginTwo";
import WorkPage_NinjaMouse from "./components/WorkPages/ProjectPages/WorkPage_NinjaMouse";
import WorkPage_Bear from "./components/WorkPages/ProjectPages/WorkPage_Bear";
import WorkPage_ToonShader from "./components/WorkPages/ProjectPages/WorkPage_ToonShader";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      <Navbar />

      {/* <ContactBar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio" element={<WorkPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cobblestone" element={<WorkPage_Cobblestone />} />
        <Route path="/xiang" element={<WorkPage_Xiang />} />
        <Route path="/origintwo" element={<WorkPage_OriginTwo />} />
        <Route path="/ninjamouse" element={<WorkPage_NinjaMouse />} />
        <Route path="/bear" element={<WorkPage_Bear />} />
        <Route path="/toonshader" element={<WorkPage_ToonShader />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ChakraProvider>
);
