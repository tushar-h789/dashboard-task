import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { LeadsTable } from "../dashboard/LeadsTable";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        isMobile={isMobile}
      />

      <div className="flex flex-col min-h-screen">
        <Header
          onMenuClick={toggleSidebar}
          isMobile={isMobile}
          sidebarOpen={sidebarOpen}
        />

        <main
          className={`
          flex-1 p-6 transition-all duration-300
          ${isMobile ? "ml-0" : sidebarOpen ? "ml-64" : "ml-16"}
        `}
        >
          <LeadsTable />
        </main>
      </div>
    </div>
  );
}
