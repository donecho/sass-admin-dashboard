import { Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

interface TopbarProps {
  setOpen: (open: boolean) => void;
}

export default function Topbar({ setOpen }: TopbarProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4">
      
      {/* Mobile menu */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800"
        title="Open menu"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Search */}
      <input
        placeholder="Search..."
        className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg outline-none w-60"
      />

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </header>
  );
}
