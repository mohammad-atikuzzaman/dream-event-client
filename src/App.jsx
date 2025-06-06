import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/main/Home";
import Events from "./pages/main/Events";
import MyBookings from "./pages/main/MyBookings";
import Profile from "./pages/main/Profile";
import AddEvent from "./pages/admin/AddEvent";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EventDetails from "./pages/main/EventDetails";
import UserSecurity from "./privetRoutes/UserSecurity";
import SearchPage from "./pages/main/SearchPage";
import Users from "./pages/admin/Users";
import AdminSecurity from "./privetRoutes/AdminSecurity";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="events-details/:id" element={<EventDetails />} />
        <Route path="search/:text" element={<SearchPage />} />
        <Route
          path="my-bookings"
          element={
            <UserSecurity>
              <MyBookings />
            </UserSecurity>
          }
        />

        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<AdminLayout />}>
        <Route
          index
          element={
            <AdminSecurity>
              <AddEvent />
            </AdminSecurity>
          }
        />
        <Route
          path="users"
          element={
            <AdminSecurity>
              <Users />
            </AdminSecurity>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
