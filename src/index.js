import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Booking from "./Packages";
import Billing from "./Billing";
import Success from "./Success";
import NoPage from "./Nopage";

export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="seeanddo" element={<Page1 />} />
          <Route path="eatanddrink" element={<Page2 />} />
          <Route path="festivalsandevents" element={<Page3 />} />
          <Route path="stay" element={<Page4 />} />
          <Route path="billing" element={<Billing />} />
          <Route path="booking" element={<Booking />} />
          <Route path="success" element={<Success />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App/>)
