import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/main/Home";
import Events from "./pages/main/Events";
import MyBookings from "./pages/main/MyBookings";
import Profile from "./pages/main/Profile";
import Dashboard from "./pages/admin/Dashboard";
import AddEvent from "./pages/admin/AddEvent";
import AuthLayout  from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-event" element={<AddEvent />} />
      </Route>
    </Routes>
  );
}

export default App;
