import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { ModeToggle } from "@/components/navigation/ModeToggle";

import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <h1 className="text-4xl">AI-LEAD-MAGNET</h1>
      </div>
      <div className="flex items-center gap-4">
        <SignedOut>
          <Link href="/sign-in">
            <Button>Sign in</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <ModeToggle />
      </div>
    </nav>
  );
}
