import React from "react"
import logo from './logo.svg';
import './App.css';
// Install npm i react-router-dom
/* 
- Link: navigate to another route WITHOUt refreshing the pages and loose all states
  - css by calling the simple tag a, like .nav > a{}
*/
import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About';
import Vans, {loader as vansLoader} from './pages/Vans/Vans';
import VanDetail, {loader as vanDetailLoader} from "./pages/Vans/VanDetail";
import Layout from "./components/Layout"
import HostNav from "./components/HostNav";
import Dashboard, {loader as dashboardLoader} from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income"
import VansHost, {loader as vanHostLoader} from "./pages/Host/VansHost"
import VanHostInfo, {loader as vanHostInfoLoader} from "./pages/Host/VanHostInfo/VanHostInfo"
import VanHostDetail from "./pages/Host/VanHostInfo/VanHostDetail";
import VanHostPricing from "./pages/Host/VanHostInfo/VanHostPricing"
import VanHostPhotos from "./pages/Host/VanHostInfo/VanHostPhotos"
import Reviews from "./pages/Host/Reviews"
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Login, {loader as loginLoader, action as loginAction} from "./pages/Login";
import { requireAuth } from "./utils";
import './server'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      {/* Because the we dont provide a path -> it will always display if there is a child inside displayed
      , and then by using Outlet, it will choose the Route child that has the right path and display wiht it  */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" loader={vansLoader} errorElement={<Error />} element={<Vans />} />
      {/* The vanDetail page: :id is considered as a parameter */}
      <Route path="/vans/:id" loader={vanDetailLoader} element={<VanDetail />} />
      {/* The host nested routes */}
      <Route path="/host" 
        loader={ async ({request}) => {
          await requireAuth(request);
          return null;
        }} 
        element={<HostNav />} 
        errorElement={<Error />}
      >
        {/* Index route: as the default child out from the outlet of the parent route */}
        <Route index loader={dashboardLoader} element={<Dashboard />} />
        {/* Relative route */}
        <Route path="income" element={<Income />} />
        <Route path="vans" loader={vanHostLoader} element={<VansHost />} />
        <Route path="vans/:id" loader={vanHostInfoLoader} element={<VanHostInfo />}>
          <Route index element={<VanHostDetail />} />
          <Route path="pricing" element={<VanHostPricing />} />
          <Route path="photos" element={<VanHostPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
      {/* Login */}
      <Route path="login" loader={loginLoader} action={loginAction} element={<Login />}/>
    </Route>
  )
);


export default function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

