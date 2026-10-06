import React from "react";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CalendarDays,
  WalletCards,
  Building2,
  BriefcaseBusiness,
  ClipboardCheck,
  Bell,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function SideBar({ collapsed = false, onToggle }) {
  const mainMenu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      name: "Employees",
      icon: Users,
    },
    {
      name: "Attendance",
      icon: CalendarCheck,
    },
    {
      name: "Leave Management",
      icon: CalendarDays,
    },
    {
      name: "Payroll",
      icon: WalletCards,
    },
  ];

  const managementMenu = [
    {
      name: "Departments",
      icon: Building2,
    },
    {
      name: "Recruitment",
      icon: BriefcaseBusiness,
    },
    {
      name: "Performance",
      icon: ClipboardCheck,
    },
    {
      name: "Reports & Analytics",
      icon: BarChart3,
    },
  ];

  const bottomMenu = [
    {
      name: "Notifications",
      icon: Bell,
      badge: "3",
    },
    {
      name: "Settings",
      icon: Settings,
    },
    {
      name: "Help & Support",
      icon: HelpCircle,
    },
  ];

  const MenuItem = ({ item }) => {
    const Icon = item.icon;

    return (
      <button
        className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
          item.active
            ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
            : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        <Icon
          size={19}
          strokeWidth={item.active ? 2.4 : 2}
          className="shrink-0"
        />

        {!collapsed && (
          <>
            <span className="flex-1 text-left">{item.name}</span>

            {item.badge && (
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                  item.active
                    ? "bg-white/20 text-white"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                {item.badge}
              </span>
            )}
          </>
        )}
      </button>
    );
  };

  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-100 px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-lg font-black text-white shadow-lg shadow-indigo-200">
            AI
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">
                AI HRMS
              </h1>

              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Human Resource
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* Main */}
        {!collapsed && (
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Main Menu
          </p>
        )}

        <div className="space-y-1.5">
          {mainMenu.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>

        {/* Management */}
        <div className="mt-8">
          {!collapsed && (
            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Management
            </p>
          )}

          <div className="space-y-1.5">
            {managementMenu.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* System */}
        <div className="mt-8">
          {!collapsed && (
            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              System
            </p>
          )}

          <div className="space-y-1.5">
            {bottomMenu.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* AI Assistant */}
      {!collapsed && (
        <div className="mx-4 mb-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm text-white">
              ✨
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                AI Assistant
              </p>

              <p className="text-[11px] text-slate-500">
                Need HR help?
              </p>
            </div>
          </div>

          <button className="w-full rounded-lg bg-white px-3 py-2 text-xs font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-600 hover:text-white">
            Ask AI Assistant
          </button>
        </div>
      )}

      {/* User Profile */}
      <div className="border-t border-slate-100 p-4">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
            SS
          </div>

          {!collapsed && (
            <>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800">
                  Said Suhail
                </p>

                <p className="truncate text-xs text-slate-400">
                  Administrator
                </p>
              </div>

              <button
                title="Logout"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
              >
                <LogOut size={18} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Collapse Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-24 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-indigo-600"
      >
        {collapsed ? (
          <ChevronRight size={15} />
        ) : (
          <ChevronLeft size={15} />
        )}
      </button>
    </aside>
  );
}

export default SideBar;