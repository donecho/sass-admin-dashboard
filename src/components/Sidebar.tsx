import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  PanelLeftOpen,
  PanelLeftClose,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Users", icon: Users, path: "/users" },
  { name: "Analytics", icon: BarChart3, path: "/analytics" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

type SidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};


  export default function Sidebar({ open, setOpen }: SidebarProps)  {
  
  const [collapsed, setCollapsed] = useState(false);

  const baseLink =
    "relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group";

  return (
    <aside
      className={`
        fixed md:static z-40
        top-0 left-0 h-full
        transform
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
        bg-white dark:bg-slate-900
        border-r border-slate-200 dark:border-slate-700
        p-4
      `}
    >
      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6 p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
      >
        {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
      </button>

      {/* Logo */}
      {!collapsed && (
        <h1 className="text-2xl font-bold mb-8 tracking-tight">
          SaaS Admin
        </h1>
      )}

      {/* Menu */}
      <nav className="space-y-2">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            end={path === "/"}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* ACTIVE INDICATOR BAR */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 rounded-r bg-indigo-400"></span>
                )}

                <Icon size={20} />

                {!collapsed && <span>{name}</span>}

                {/* Tooltip when collapsed */}
                {collapsed && (
                  <span
                    className="
                      absolute left-full ml-3
                      px-2 py-1 text-xs rounded-md
                      bg-black text-white
                      opacity-0 group-hover:opacity-100
                      whitespace-nowrap
                    "
                  >
                    {name}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
