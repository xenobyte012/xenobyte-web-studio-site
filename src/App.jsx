import React from "react";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ContactPageSection from "../src/sections/ContactUs";

const Barber = lazy(() => import("./barber-shop/barber-website"));

function App() {
  return (
    <div className="w-full overflow-x-hidden h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barber" element={<Barber />} />
      </Routes>
    </div>
  );
}

export default App;