import Navbar from "@/components/dashboard-navbar";
import Sidebar from "@/components/dashboard-sidebar";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { redirect } from "next/navigation";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("h-full relative bg-white", poppins.className)}>
      <div className="hidden h-full md:flex md:w-[17rem] md:flex-col md:fixed md:inset-y-0 rounded-br-lg rounded-tr-lg">
        <Sidebar />
      </div>
      <main className={cn("md:pl-[17rem]")}>
        <Navbar />
        <div className="max-h-screen rounded-tl-lg bg-white px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
