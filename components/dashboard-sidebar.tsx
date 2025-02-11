"use client";

import { sidebarRoutes } from "@/constants/dashboard";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const monserrat = Poppins({ weight: "600", subsets: ["latin"] });

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-6 py-3 flex flex-col h-full bg-[#F8F8F8] text-white drop-shadow-xl">
      <div className="flex flex-col gap-y-2 py-1">
        <Link
          href="/dashboard"
          className="flex justify-center mt-6 mb-2 text-xl font-bold"
        >
          <h1 className="text-2xl text-black">ProdigyAI</h1>
        </Link>
        <div className="flex flex-col mt-8 gap-y-2">
          {sidebarRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex text-sm group p-2 w-full justify-start font-medium cursor-pointer hover:font-semibold transition",
                pathname === route.href
                  ? "text-[#002D62] border-l-4 border-[#002D62] "
                  : "text-[#807f7fd7]"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    "h-5 w-5 mr-3",
                    pathname === route.href
                      ? "text-[#002D62] "
                      : "text-[#807f7fd7]"
                  )}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
