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
        bg-white border-b border-gray-200 transition-all duration-300
        h-auto sm:h-16 flex items-center
        mt-3 sm:mt-[25px] pb-2 sm:pb-6
        ${isMobile ? "ml-0" : sidebarOpen ? "ml-64" : "ml-16"}
      `}
    >
      <div className="flex items-center justify-between w-full px-4 sm:px-6 py-2 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="p-1 -ml-1"
            >
              <Menu className="w-6 h-6" />
            </Button>
          )}

          <div className="flex items-center gap-3 sm:gap-[14px] min-w-0">
            {/* Avatar */}
            <img
              src="/images/profile-avatar.png"
              alt="user avatar"
              className="w-9 h-9 sm:w-12 sm:h-12 rounded-full"
            />

            {/* Name + welcome (truncate on tiny screens) */}
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-bold text-[#171717] truncate">
                Sophia Williams
              </h1>
              <p className="text-xs sm:text-sm text-[#5C5C5C] truncate">
                Welcome back to Synergy 👋
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* search stays hidden on md- as before */}
          <div className="relative hidden md:block">
            <SearchIcon className="w-5 h-5" />
          </div>

          <div className="relative">
            <Button variant="ghost" size="sm" className="p-1.5 sm:p-2 relative">
              <img
                src="/images/notification.png"
                alt="notification"
                className="w-5 h-5 sm:w-auto sm:h-auto"
              />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
