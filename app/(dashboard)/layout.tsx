import { Toaster } from "react-hot-toast";

import DashboardNavbar from "@/components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex size-full flex-col">
      <DashboardNavbar />
      {children}
      <Toaster />
    </div>
  );
}
