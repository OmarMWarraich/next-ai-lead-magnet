import { UserButton } from "@clerk/nextjs";
import { currentUser, User } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

import { ModeToggle } from "@/app/(landing)/components/ModeToggle";
import { Button } from "@/components/ui/button";

async function LandingPageNavbar() {
  const user: User | null = await currentUser();

  return (
    <nav className="flex w-screen items-center justify-between p-6 ">
      <div>
        <Link className="text-2xl font-bold no-underline" href="/">
          LeadConvert
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold">
          {user ? (
            <div className="flex flex-row items-center gap-x-4">
              <Link href="/leadmagnets">
                <Button variant="outline">Open App</Button>
              </Link>
              <UserButton />
            </div>
          ) : (
            <Link href="/sign-in">
              <Button variant="outline">Sign in</Button>
            </Link>
          )}
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default LandingPageNavbar;
