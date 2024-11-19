import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/navigation/ModeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <h1 className="text-4xl">AI-LEAD-MAGNET</h1>
      </div>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <ModeToggle />
      </div>
    </nav>
  );
}
