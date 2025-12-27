"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "pl-64" : "pl-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
