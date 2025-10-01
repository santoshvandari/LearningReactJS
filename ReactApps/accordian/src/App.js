import { useState } from "react";
import faqs from "./constraints/faqs";
import Accordion from "./components/Accordian";



export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

