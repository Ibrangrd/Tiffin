import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appReduxStore from "./utils/appReduxStore";
import Cart from "./components/Cart";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={appReduxStore}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer/>
      </div>
      <Toaster />
    </Provider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Error />}>
      <Route path="/" element={<Body />} />
      <Route path="about"
        element={
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        }
      />
      <Route path="grocery"
        element={
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        }
      />
      <Route path="restraunts/:resID" element={<RestrauntMenu />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
