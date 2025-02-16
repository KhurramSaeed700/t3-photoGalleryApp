import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";
import Link from "next/link";
import { Car, Image as ImageIcon } from "lucide-react";

async function Images() {
  const images = await getMyImages();

  if (!images.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-gray-400">
        <ImageIcon className="h-16 w-16 text-purple-400/50" />
        <p className="text-lg">No images in the gallery yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {/* Display images Home Page */}
      {images.map((image) => (
        <Link href={`/photos/${image.id}`} className="block">
          <div
            key={image.id}
            className="hover:shadow-glow group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent transition-all hover:border-white/20"
          >
            <Image
              src={image.url}
              width={480}
              height={480}
              alt={image.name}
              placeholder="blur"
              blurDataURL="{base64}"
              priority={false}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="line-clamp-1 text-sm font-medium text-white">
                {image.name}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="px-3">
      <SignedOut>
        <div className=">gap-4 flex flex-col items-center justify-center py-16 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-image h-16 w-16 text-purple-400"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <p className="pt-3 text-xl">Sign in to view your collection</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
