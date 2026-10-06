import React, { useState } from "react";
import SideBar from "./Components/Layout/SideBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import AdminDashBoard from "./DashBoard/Pages/AdminDashBoard";
import Login from "./Components/Common/Login";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Routes>

        {/* Login page (first page, no sidebar) */}
        <Route path="/" element={<Login />} />

        {/* Pages with sidebar layout */}
        <Route
          element={
            <div className="min-h-screen bg-slate-100">

              {/* Sidebar */}
              <SideBar
                collapsed={collapsed}
                onToggle={() => setCollapsed(!collapsed)}
              />

              {/* Main Content */}
              <main
                className={`min-h-screen transition-all duration-300 ${
                  collapsed ? "ml-20" : "ml-72"
                }`}
              >
                <div className="p-8">
                  <Outlet />
                </div>
              </main>

            </div>
          }
        >
          {/* Dashboard */}
          <Route path="/dashboard" element={<AdminDashBoard />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;