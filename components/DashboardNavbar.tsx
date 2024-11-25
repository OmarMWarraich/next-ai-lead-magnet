"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  {
    name: "Lead Magnets",
    path: "/leadmagnets",
  },
  {
    name: "Account",
    path: "/account",
  },
];

function DashboardNavBar() {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <div className="flex items-center justify-between border-b-2 p-4 text-purple-500">
      {/* Logo Link */}
      <Link href="/">
        <h1 className="text-2xl font-bold">Lead Convert</h1>
      </Link>
      {/*  Routes followed by the clerk user button */}
      <div className="flex items-center gap-x-6 text-lg">
        {routes.map((route, idx) => (
          <Link
            key={idx}
            href={route.path}
            className={
              pathname === route.path ? "border-b-2 border-purple-300" : ""
            }
          >
            {route.name}
          </Link>
        ))}

        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default DashboardNavBar;
