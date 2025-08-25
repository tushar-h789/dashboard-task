import { Button } from "../ui";
import { Menu } from "lucide-react";
import { SearchIcon } from "@/assets/icons/search-icon";

export function Header({
  onMenuClick,
  isMobile,
  sidebarOpen,
}: {
  onMenuClick: () => void;
  isMobile: boolean;
  sidebarOpen: boolean;
}) {
  return (
    <header
      className={`
      bg-white border-b border-gray-200 transition-all duration-300 h-16 flex items-center mt-[25px] pb-6
      ${isMobile ? "ml-0" : sidebarOpen ? "ml-64" : "ml-16"}
    `}
    >
      <div className="flex items-center justify-between px-6 py-4 w-full ">
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
          <div className="flex items-center gap-[14px]">
            {/* <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold">
              SW
            </div> */}
            <img
              src="/src/assets/images/profile-avatar.png"
              alt="user avatar"
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-xl font-bold text-[#171717]">
                Sophia Williams
              </h1>
              <p className="text-sm text-[#5C5C5C]">
                Welcome back to Synergy 👋
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="relative hidden md:block">
            <SearchIcon className="w-5 h-5" />
          </div>
          <div className="relative">
            <Button variant="ghost" size="sm" className="p-2 relative">
              {/* <NotificationIcon className="w-12 h-12" /> */}
              <img
                src="/src/assets/images/notification.png"
                alt="notification"
                className=""
              />
            </Button>
          </div>
          {/* <Button variant="outline" size="sm" className="hidden md:flex">
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </Button> */}
        </div>
      </div>
    </header>
  );
}
