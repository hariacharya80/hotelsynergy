import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import NotFound from "./pages/NotFound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <section className="w-screen h-screen fixed top-0 left-0 flex justify-center">
      <Main />
    </section>
  </React.StrictMode>
);

function Main() {
  return (
    <main className="w-screen h-screen">
      <BrowserRouter>
        <Header />
        <section className="h-[90vh]  overflow-y-scroll">
          <div className="px-[10vw]">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </section>
      </BrowserRouter>
    </main>
  );
}

export default Main;
