"use server";

import MobileSidebar from "./mobile-sidebar";
import { UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  return (
    <div className="flex bg-transparent items-center justify-between p-6">
      <div>
        <MobileSidebar />
      </div>
      <div className="flex justify-end">
        <div className="flex gap-x-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
