import { useState } from "react";
import { Button } from "../ui";
import { Bell, Menu, Plus, Search } from "lucide-react";

export function Header({
  onMenuClick,
  isMobile,
  sidebarOpen,
}: {
  onMenuClick: () => void;
  isMobile: boolean;
  sidebarOpen: boolean;
}) {
  const [notifications] = useState(3);

  return (
    <header
      className={`
      bg-white border-b border-gray-200 transition-all duration-300 h-16 flex items-center
      ${isMobile ? "ml-0" : sidebarOpen ? "ml-64" : "ml-16"}
    `}
    >
      <div className="flex items-center justify-between px-6 py-4 w-full">
        <div className="flex items-center gap-4">
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="p-1"
            >
              <Menu className="w-6 h-6" />
            </Button>
          )}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold">
              SW
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Sophia Williams
              </h1>
              <p className="text-sm text-gray-500">
                Welcome back to Synergy 👋
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads, members, or tags..."
              className="pl-10 pr-4 py-2.5 w-80 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
            />
          </div>
          <div className="relative">
            <Button variant="ghost" size="sm" className="p-2 relative">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>
    </header>
  );
}
