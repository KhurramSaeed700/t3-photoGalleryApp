import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { Camera, Car } from "lucide-react";
import { SimpleUploadButton } from "./simpleUploadButton";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-white/10 bg-gradient-to-r from-gray-900 to-black px-6 py-4 backdrop-blur-lg">
      <Link
        href="/"
        className="group flex items-center gap-2 text-2xl font-bold tracking-tighter"
      >
        <Camera className="h-8 w-8 text-purple-400 transition-all group-hover:text-purple-300" />
        <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
          Gallery
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className="hover:shadow-glow rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />

          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "h-9 w-9",
                userButtonPopoverCard: "bg-gray-900 border border-white/10",
                userPreviewMainIdentifier: "text-white",
                userButtonPopoverActionButtonText: "text-gray-300",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
