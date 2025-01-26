import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  if (!images.length) {
    return <div className="text-center text-lg">No images uploaded yet</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col items-center">
          <div className="w-full h-48 relative">
            <Image
              src={image.url}
              alt={image.name}
              layout="fill"
              objectFit="cover" // Ensures consistent sizing and cropping
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="text-sm text-center mt-2">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="pl-3 pr-3">
      <SignedOut>
        <div className="text-center text-lg">Sign in to view your images</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
