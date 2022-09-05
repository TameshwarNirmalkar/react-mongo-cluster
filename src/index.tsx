import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import HomeContainer from "./container/Home";
import ServicesContainer from "./container/Services";
import ContactContainer from "./container/Contact";
import TestimonialContainer from "./container/Testimonial";
import PricingContainer from "./container/Pricing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomeContainer />} />
            <Route path="services/*" element={<ServicesContainer />} />
            <Route path="pricing/*" element={<PricingContainer />} />
            <Route path="testimonial/*" element={<TestimonialContainer />} />
            <Route path="contact/*" element={<ContactContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
