import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Members from "@/pages/Members";
import Departments from "@/pages/Departments";
import BulkAdjustments from "@/pages/BulkAdjustments";
import Leads from "@/pages/Leads";
import Tags from "@/pages/Tags";
import Customization from "@/pages/Customization";
import Products from "@/pages/Products";
import Integrations from "@/pages/Integrations";
import Settings from "@/pages/Settings";
import FAQs from "@/pages/FAQs";
import Home from "@/pages/Home";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/bulk-adjustments" element={<BulkAdjustments />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/products" element={<Products />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
