import {
  X,
  Users,
  Tag,
  Package,
  Settings,
  MoreHorizontal,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/assets/icons/logo-icon";
import { HomeIcon } from "@/assets/icons/home-icon";
import { DepartmentIcon } from "@/assets/icons/department-icon";
import { AdjustmentIcon } from "@/assets/icons/adjustment-icon";
import { LeadsIcon } from "@/assets/icons/leads-icon";
import { CustomizationIcon } from "@/assets/icons/customization-icon";
import { IntegrationsIcon } from "@/assets/icons/integrations-icon";
import { FaqsIcon } from "@/assets/icons/faqs-icon";

// ====== SIDEBAR COMPONENT ======
export function Sidebar({
  isOpen,
  onToggle,
  isMobile,
}: {
  isOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
}) {
  const sidebarItems = [
    { icon: HomeIcon, label: "Home", active: true },
    {
      category: "TEAM MANAGEMENT",
      items: [
        { icon: Users, label: "Members" },
        { icon: DepartmentIcon, label: "Departments" },
        { icon: AdjustmentIcon, label: "Bulk Adjustments" },
      ],
    },
    {
      category: "LEADS MANAGEMENT",
      items: [
        { icon: LeadsIcon, label: "Leads" },
        { icon: Tag, label: "Tags" },
      ],
    },
    {
      category: "BRAND & PRODUCTS",
      items: [
        { icon: CustomizationIcon, label: "Customization" },
        { icon: Package, label: "Products" },
      ],
    },
    {
      category: "CONFIGURATION",
      items: [
        { icon: IntegrationsIcon, label: "Integrations" },
        { icon: Settings, label: "Settings" },
      ],
    },
    {
      category: "SUPPORT",
      items: [{ icon: FaqsIcon, label: "FAQs" }],
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 transition-all duration-300 ease-in-out
        ${
          isMobile
            ? isOpen
              ? "w-64"
              : "w-0 overflow-hidden"
            : isOpen
            ? "w-64"
            : "w-16"
        }
      `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div
            className={`flex items-center gap-3 ${
              !isOpen && !isMobile ? "justify-center" : ""
            }`}
          >
            {(isOpen || isMobile) && (
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-900 text-lg">
                  <LogoIcon className="w-10 h-10" />
                </span>
                <span className="flex flex-col items-center border border-[#EBEBEB] px-[6px] py-[1px] rounded-lg">
                  <ChevronUp className="w-4 h-4 block text-[#676767]" />
                  <ChevronDown className="w-4 h-4 block -mt-[6px] text-[#676767]" />
                </span>
              </div>
            )}
          </div>
          {isMobile && isOpen && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="p-1"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
        </div>

        {/* Sidebar Content */}
        <div className="p-3 overflow-y-auto h-[calc(100%-8rem)]">
          {sidebarItems.map((item, index) => {
            if (item.category) {
              return (
                <div key={index} className="mb-6">
                  {(isOpen || isMobile) && (
                    <h3 className="text-xs font-semibold text-[#ADADAD] uppercase tracking-wider mb-3 mt-6 px-3">
                      {item.category}
                    </h3>
                  )}
                  {item.items.map((subItem, subIndex: number) => {
                    const IconComponent = subItem.icon as React.ElementType;
                    return (
                      <button
                        key={subIndex}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group mb-1
                          ${
                            subItem.active
                              ? "bg-[#6828EE] text-[#6828EE] border border-[#6828EE]"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }
                          ${
                            !isOpen && !isMobile
                              ? "justify-center"
                              : "justify-between"
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent
                            className={`w-5 h-5 flex-shrink-0 ${
                              subItem.active ? "text-[#6828EE]" : ""
                            }`}
                          />
                          {(isOpen || isMobile) && (
                            <span className="font-medium text-sm text-[#363636]">
                              {subItem.label}
                            </span>
                          )}
                        </div>
                        {/* {(isOpen || isMobile) && subItem.count && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-600"
                          >
                            {subItem.count}
                          </Badge>
                        )} */}
                      </button>
                    );
                  })}
                </div>
              );
            } else {
              const IconComponent = item.icon as React.ElementType;
              return (
                <button
                  key={index}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 mb-2
                    ${
                      item.active
                        ? "bg-purple-50 text-purple-700 border border-purple-200"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                    ${!isOpen && !isMobile ? "justify-center" : ""}
                  `}
                >
                  <IconComponent
                    className={`w-5 h-5 flex-shrink-0 ${
                      item.active ? "text-purple-600" : ""
                    }`}
                  />
                  {(isOpen || isMobile) && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </button>
              );
            }
          })}
        </div>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white h-20">
          <div
            className={`flex items-center gap-3 ${
              !isOpen && !isMobile ? "justify-center" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
              SW
            </div>
            {(isOpen || isMobile) && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  Sophia Williams
                </p>
                <p className="text-xs text-gray-500 truncate">
                  sophia@alignui.com
                </p>
              </div>
            )}
            {(isOpen || isMobile) && (
              <Button variant="ghost" size="sm" className="p-1">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
