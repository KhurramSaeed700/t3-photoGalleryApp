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
        <p className="text-lg">No cars in the gallery yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {images.map((image) => (
        <div
          key={image.id}
          className="hover:shadow-glow group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent transition-all hover:border-white/20"
        >
          <Link href={`/photos/${image.id}`} className="block">
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
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="px-3">
      <SignedOut>
        <div className=">gap-4 flex flex-col items-center justify-center py-16 text-gray-400">
          <Car className="h-16 w-16 text-purple-400/50" />
          <p className="text-lg">Sign in to view your collection</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
