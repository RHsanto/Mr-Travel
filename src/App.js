import "./App.css";
import Home from "./components/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightSearch from "./components/AllSearch/FlightSearch";
import HotelSearch from "./components/AllSearch/HotelSearch";
import TourSearch from "./components/AllSearch/TourSearch";
import BusSearch from "./components/AllSearch/BusSearch";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import MyBooking from "./components/DashBoard/MyBooking";
import OffersDetails from "./components/Home/BestOffer/OffersDetails";
import TourDetails from "./components/AllDetails/TourDetails";
import FlightDetails from "./components/AllDetails/FlightDetails";
import BusDetails from "./components/AllDetails/BusDetails";
import Payment from "./components/DashBoard/Payment/Payment";
import UserProfile from "./components/DashBoard/UserProfile/UserProfile";
import AdminDash from "./components/DashBoard/AdminDashboard/AdminDash";
import PrivateRoute from "./components/Private/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/flight" element={<FlightSearch />} />
          <Route path="/hotel" element={<HotelSearch />} />
          <Route path="/tour" element={<TourSearch />} />
          <Route path="/bus" element={<BusSearch />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/admin-dash" element={<AdminDash />} />
          <Route
            path="/User-Profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/offers/:id"
            element={
              <PrivateRoute>
                <OffersDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/tours/:id"
            element={
              <PrivateRoute>
                <TourDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/flights/:id"
            element={
              <PrivateRoute>
                <FlightDetails />
              </PrivateRoute>
            }
          />
          <Route path="/bus/:id" element={<BusDetails />} />
          <Route path="/payment/:id" element={<Payment />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
